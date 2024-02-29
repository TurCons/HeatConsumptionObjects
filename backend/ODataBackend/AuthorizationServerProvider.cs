namespace IIS.OHC
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;

    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.Business.LINQProvider;
    using ICSSoft.STORMNET.Security;
    using Microsoft.Owin.Security.OAuth;
    using Microsoft.Practices.Unity;
    using ICSSoft.Services;
    using NewPlatform.Flexberry.Security;

    public class AuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        private class UserNameinfo
        {
            public string Name { get; private set; }
            public string Domain { get; private set; }

            public UserNameinfo(string userName)
            {
                var _domain = string.Empty;
                Name = DomainHelper.ExtractLoginAndDomain(userName, out _domain);
                Domain = _domain;
            }
        }

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            // todo: смотреть текущий контекст для AD пользователей.

            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
            var agentManager = UnityContainerExtensions.Resolve<IAgentManager>(UnityFactory.GetContainer());

            IDataService ds = SecurityHelper.GetDataServiceWithoutSecurityChecks(DataServiceProvider.DataService);
            var userInfo = new UserNameinfo(context.UserName);

            // Проверка пользователя.
            if (agentManager.IsUserExist(userInfo.Name, userInfo.Domain, context.Password))
            {
                // Получить агента для пользователя.
                var user = agentManager.GetAgentForUser(userInfo.Name, userInfo.Domain, true);

                // Если агент есть.
                if (user != null)
                {
                    var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                    identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
                    context.Validated(identity);

                    return;
                }
            }

            context.SetError("Authentication error", "Неудачная попытка входа. Повторите попытку.");
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            var userInfo = new UserNameinfo(context.Identity.Name);
            var agentManager = UnityContainerExtensions.Resolve<IAgentManager>(UnityFactory.GetContainer());

            //var agent = Helpers.SecurityHelper.GetAgentByUserName(context.Identity.Name);
            var agent = agentManager.GetAgentForUser(userInfo.Name, userInfo.Domain);

            //var roles = Helpers.SecurityHelper.GetRolesByLogin(DataServiceProvider.DataService, context.Identity.Name);
            var roles = agentManager.GetRolesOfUser(userInfo.Name, userInfo.Domain);

            var operations = SecurityHelper.GetOpertionsByAgentAndRoles(agent, roles);

            context.Properties.ExpiresUtc = System.DateTime.UtcNow.AddMonths(1);
            context.AdditionalResponseParameters.Add("userName", context.Identity.Name);
            context.AdditionalResponseParameters.Add("roles", string.Join(",", roles.Select(r => r.Name)));
            context.AdditionalResponseParameters.Add("operations", string.Join(",", operations));
            context.AdditionalResponseParameters.Add("agentKey", agent.AgentKey.ToString());
            context.AdditionalResponseParameters.Add("agentName", agent.Name);
            context.AdditionalResponseParameters.Add("expire_date", context.Properties.ExpiresUtc.Value.Subtract(new System.DateTime(1970, 1, 1, 0, 0, 0, System.DateTimeKind.Utc)).TotalMilliseconds);

            return base.TokenEndpoint(context);
        }
    }
}
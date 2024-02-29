using System;
using System.Web.Http;

using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using ICSSoft.STORMNET.Business.Audit;

using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using ICSSoft.STORMNET.Business;

[assembly: OwinStartup(typeof(IIS.OHC.Startup))]
namespace IIS.OHC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureOAuth(app);

            IUnityContainer container = new UnityContainer();
            container.LoadConfiguration();
            container.RegisterInstance(DataServiceProvider.DataService);
            GlobalConfiguration.Configure(configuration => ODataConfig.Configure(configuration, container));
            AuditSetter.InitAuditService(DataServiceProvider.DataService);
            
        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            var OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = new AuthorizationServerProvider()
            };

            // Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
            var options = AppConfigHelper.BackendDebug
                ? new OAuthBearerAuthenticationOptions { Provider = new BearerAuthenticationProvider() }
                : new OAuthBearerAuthenticationOptions();
            app.UseOAuthBearerAuthentication(options);
        }
    }
}
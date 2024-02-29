namespace IIS.OHC
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.Owin.Security.OAuth;

    using ICSSoft.STORMNET;

    public class BearerAuthenticationProvider : OAuthBearerAuthenticationProvider
    {
        public override Task ValidateIdentity(OAuthValidateIdentityContext context)
        {
            try
            {
                LogService.LogDebug($"Валидация авторизации. Запрос:\n{context?.Request?.Uri?.ToString()}\nТикет: {context?.Ticket?.Identity?.ToString()}\nПользователь: {context?.Request?.User?.ToString()}");
            }
            catch (Exception e)
            {
                LogService.LogError("Ошибка логирования валидации авторизации.", e);
            }

            return base.ValidateIdentity(context);
        }

        public override Task RequestToken(OAuthRequestTokenContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            var h = string.Join("\n", context.Request.Headers.Select(x => x.Key + ":" + string.Join(";", x.Value)));
            LogService.LogDebug($"Валидация токена по запросу:\n{context?.Request?.Uri?.ToString()}\nХедеры: {h}");
            return base.RequestToken(context);
        }
    }
}
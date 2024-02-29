namespace IIS.OHC
{
    using System;
    using System.Reflection;
    using System.Web.Http;

    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.Business.Audit.Objects;
    using ICSSoft.STORMNET.Security;
    using ICSSoft.Services;
    using IIS.Caseberry.Logging.Objects;

    using Microsoft.Practices.Unity;

    using NewPlatform.Flexberry;
    using NewPlatform.Flexberry.AspNet.WebApi.Cors;
    using NewPlatform.Flexberry.ORM.ODataService;
    using NewPlatform.Flexberry.ORM.ODataService.Extensions;
    using NewPlatform.Flexberry.ORM.ODataService.Functions;
    using NewPlatform.Flexberry.ORM.ODataService.Model;
    using NewPlatform.Flexberry.Services;

    using System.Web;
    using System.Web.Http.Cors;
    /// <summary>
    /// Configure OData Service.
    /// </summary>
    internal static class ODataConfig
    {
        public static ManagementToken manageToken;

        /// <summary>
        /// Configure OData by DataObjects assembly.
        /// </summary>
        /// <param name="config">Http configuration object.</param>
        /// <param name="container">Unity container.</param>
        public static void Configure(HttpConfiguration config, IUnityContainer container)
        {
            if (config == null)
            {
                throw new ArgumentNullException(nameof(config));
            }

            if (container == null)
            {
                throw new ArgumentNullException(nameof(container));
            }

            var cors = new EnableCorsAttribute("*", "*", "*") { SupportsCredentials = true };
            config.EnableCors(cors);

            //Роутинг:
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
               name: "DefaultApi",
               routeTemplate: "api/{controller}/{method}"
           );

            // To support CORS uncomment the line below.
            // config.EnableCors(new DynamicCorsPolicyProvider());
            // Use constructor with true first parameter for enable SupportsCredentials.

            // Use Unity as WebAPI dependency resolver
            config.DependencyResolver = new UnityDependencyResolver(container);

            // Create EDM model builder
            var assemblies = new[]
            { 
                Assembly.Load("OHC.Objects"),
  //              Assembly.Load("OHC.ODataBackend"),
    Assembly.Load("NewPlatform.Flexberry.GIS.Objects"),
    
                typeof(Agent).Assembly,
                typeof(AuditEntity).Assembly,
                typeof(ApplicationLog).Assembly,
                typeof(UserSetting).Assembly,
                typeof(FlexberryUserSetting).Assembly,
                typeof(Lock).Assembly
            };
            var builder = new DefaultDataObjectEdmModelBuilder(assemblies);

            // Map OData Service
            manageToken = config.MapODataServiceDataObjectRoute(builder);

            // User functions
            manageToken.Functions.Register(new Func<QueryParameters, string>(Test));

            manageToken.Events.CallbackBeforeGet = ODataEvents.BeforeGet;
            manageToken.Events.CallbackBeforeCreate = ODataEvents.BeforeCreate;
            manageToken.Events.CallbackBeforeUpdate = ODataEvents.BeforeUpdate;
            manageToken.Events.CallbackBeforeDelete = ODataEvents.BeforeDelete;
            manageToken.Events.CallbackAfterInternalServerError = ODataEvents.AfterInternalServerError;
            manageToken.Events.CallbackAfterCreate = ODataEvents.AfterCreate;
            manageToken.Events.CallbackAfterUpdate = ODataEvents.AfterUpdate;

            // Event handlers
            manageToken.Events.CallbackAfterCreate = CallbackAfterCreate;
            manageToken.Events.CallbackAfterGet = ManageTokenEventsAfterGet;

        }

        /// <summary>
        /// Метод вызываемый после вычитывания объектов.
        /// </summary>
        /// <param name="objs"></param>
        public static void ManageTokenEventsAfterGet(ref DataObject[] objs)
        {
            foreach (var obj in objs)
            {
                if (obj.GetType() == typeof(Agent))
                {
                    ((Agent)obj).Pwd = null;
                }
            }
        }

        private static void CallbackAfterCreate(DataObject dataObject)
        {
            // TODO: implement handler
        }

        private static string Test(QueryParameters queryParameters)
        {
            return "Hello world!";
        }
    }
}
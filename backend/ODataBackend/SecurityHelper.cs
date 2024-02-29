namespace IIS.OHC
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.FunctionalLanguage;
    using ICSSoft.STORMNET.Security;
    using ICSSoft.STORMNET.Windows.Forms;
    using NewPlatform.Flexberry.Security;
    using Microsoft.Practices.Unity;

    public static class SecurityHelper
    {
        /// <summary>
        /// Получение датасервиса без проверки полномочий.
        /// </summary>
        /// <param name="dataService">Датасервис, на основе которого создается датасервис без проверки полномочий.</param>
        /// <returns>Датасервис без проверки полномочий.</returns>
        public static IDataService GetDataServiceWithoutSecurityChecks(IDataService dataService)
        {
            if (dataService == null)
            {
                throw new ArgumentNullException("dataService");
            }

            IDataService sameDataService = (IDataService)Activator.CreateInstance(dataService.GetType(), new EmptySecurityManager());
            sameDataService.CustomizationString = dataService.CustomizationString;
            return sameDataService;
        }

        public static IAgent GetAgentByUserName(string userName)
        {
            var login = userName;
            var domain = string.Empty;

            if (userName.Contains('\\'))
            {
                var parts = userName.Split('\\');

                login = parts[1];
                domain = parts[0];
            }

            var ds = GetDataServiceWithoutSecurityChecks(DataServiceProvider.DataService);
            var langDef = new ExternalLangDef();
            var agentStringedView = Information.ExtractPropertyPath<Agent>(x => x.Login);
            var lcs = LoadingCustomizationStruct.GetSimpleStruct(typeof(Agent), Agent.Views.Sec_AgentE);

            lcs.LimitFunction = langDef.GetFunction(langDef.funcEQ, new VariableDef(langDef.StringType, agentStringedView), login);

            var agent = ds.LoadObjects(lcs).Cast<Agent>().FirstOrDefault();

            return agent;
        }

        // ToDo: выпилить методы GetRolesByLogin, GetNamesOfRolesWithParentOnes, GetRolesWithParentOnes после того, как технологи решат проблему:
        // http://techforum.ics.perm.ru/default.aspx?g=posts&m=6225#post6225 и использовать стандартный механизм через new CaseberryRoleProvider().GetRolesForUser(LOGIN).
        /// <summary>
        /// Получение всех ролей текущего пользователя, включая наследуемые от непосредственных ролей пользователя роли.
        /// </summary>
        /// <param name="dataService">Сервис данных.</param>
        /// <param name="login">Логин пользователя.</param>
        /// <returns></returns>
        public static List<string> GetRolesByLogin(IDataService dataService, string login)
        {
            try
            {
                var ds = GetDataServiceWithoutSecurityChecks(dataService);
                var langDef = new ExternalLangDef();
                var agentStringedView = Information.ExtractPropertyPath<LinkRole>(x => x.Agent.Login);
                var lcs = LoadingCustomizationStruct.GetSimpleStruct(typeof(LinkRole), LinkRole.Views.Sec_GetRoles);
                lcs.LimitFunction = langDef.GetFunction(langDef.funcEQ, new VariableDef(langDef.StringType, agentStringedView), login);
                var roleList = ds.LoadObjects(lcs).Cast<LinkRole>().Select(x => x.Role).ToList();
                var roles = GetRolesWithParentOnes(ds, roleList);
                return roles.Select(x => x.Name).ToList();
            }
            catch (Exception ex)
            {
                return new List<string>();
            }
        }

        /// <summary>
        /// Получение имён всех ролей, включая родительские, на базе списка ролей.
        /// </summary>
        /// <param name="roles">Роли, чьи родительские роли нужно найти.</param>
        /// <returns>Имена найденных ролей (включая исходные).</returns>
        private static List<string> GetNamesOfRolesWithParentOnes(IDataService dataService, List<Agent> roles)
        {
            var fullRoleList = GetRolesWithParentOnes(dataService, roles);
            return fullRoleList.Select(x => x.Name).Distinct().ToList();
        }

        /// <summary>
        /// Получение всех ролей, включая родительские, на базе списка ролей.
        /// </summary>
        /// <param name="roles">Роли, чьи родительские роли нужно найти.</param>
        /// <returns>Все найденные роли (включая исходные).</returns>
        private static List<Agent> GetRolesWithParentOnes(IDataService ds, List<Agent> roles)
        {
            if (roles == null || !roles.Any())
            {
                return new List<Agent>();
            }

            var langDef = new ExternalLangDef();
            LoadingCustomizationStruct lcs = LoadingCustomizationStruct.GetSimpleStruct(typeof(LinkRole), LinkRole.Views.GetParentRoles);

            // Условие, что и дочерний, и родительский элемент - это роли.
            var baseCheckFunction = langDef.GetFunction(
                langDef.funcAND,
                langDef.GetFunction(langDef.funcEQ, new VariableDef(langDef.BoolType, "Agent.IsRole"), langDef.paramTrue),
                langDef.GetFunction(langDef.funcEQ, new VariableDef(langDef.BoolType, "Role.IsRole"), langDef.paramTrue));
            List<Agent> resultList = roles.ToList();
            List<object> rolesId = roles.Select(x => x.__PrimaryKey).ToList();
            List<object> newRolesId = rolesId.Select(x => x).ToList();
            while (newRolesId.Count > 0)
            {
                /*
                 * Данный цикл не зациклится, поскольку из newRolesId исключаются все ранее встреченные роли.
                 * Соответственно, если в ролях был цикл, то при возвращении в вершину, из которой шло рассмотрение, повторно вершина рассматриваться не будет.
                 */

                var agentList = new List<object>() { new VariableDef(langDef.GuidType, "Agent") };
                agentList.AddRange(newRolesId);

                var roleList = new List<object>() { new VariableDef(langDef.GuidType, "Role") };
                roleList.AddRange(rolesId);

                /*
                 * Ограничение следующее:
                 * дочерний и родительский элемент - это роли,
                 * идентификатор дочернего элемента роли содержится в текущем списке поиска,
                 * идентификатор родительского элемента роли не содержится в списке идентификаторов уже найденных ролей.
                 */
                lcs.LimitFunction =
                    langDef.GetFunction(
                        langDef.funcAND,
                        baseCheckFunction,
                        langDef.GetFunction(langDef.funcIN, agentList.ToArray()),
                        langDef.GetFunction(langDef.funcNOT, langDef.GetFunction(langDef.funcIN, roleList.ToArray())));
                List<LinkRole> newRoles = ds.LoadObjects(lcs).Cast<LinkRole>().ToList();
                newRolesId = newRoles.Select(x => x.Role.__PrimaryKey).ToList();
                rolesId.AddRange(newRolesId);
                resultList.AddRange(newRoles.Select(x => x.Role).ToList());
            }

            return resultList;
        }

        public static List<string> GetOpertionsByAgentAndRoles(IAgent agent, IEnumerable<IAgent> roles)
        {
            var newList = new List<IAgent>();

            newList.Add(agent);
            newList.AddRange(roles);

            return GetOpertionsByAgents(newList);
        }

        public static List<string> GetOpertionsByAgents(IEnumerable<IAgent> roles)
        {
            var ds = GetDataServiceWithoutSecurityChecks(DataServiceProvider.DataService);
            var langDef = new ExternalLangDef();
            var lcs = LoadingCustomizationStruct.GetSimpleStruct(typeof(Permition), Permition.Views.CheckAccessOperation);
            List<object> rolesId = roles.Select(x => x.AgentKey as object).ToList();

            var agentList = new List<object>() { new VariableDef(langDef.GuidType, Information.ExtractPropertyName<Permition>(x => x.Agent)) };
            agentList.AddRange(rolesId);

            var loadFunction =
                langDef.GetFunction(
                    langDef.funcAND,
                    langDef.GetFunction(langDef.funcIN, agentList.ToArray()),
                    langDef.GetFunction(
                        langDef.funcEQ,
                        new VariableDef(langDef.BoolType, Information.ExtractPropertyPath<Permition>(x => x.Subject.IsOperation)),
                        langDef.paramTrue));

            lcs.LimitFunction = loadFunction;

            var operations = ds.LoadObjects(lcs)
                .Cast<Permition>()
                .ToList()
                .Select(x => x.Subject.Name)
                .Distinct()
                .ToList();

            return operations;
        }
    }
}
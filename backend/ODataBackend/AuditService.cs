namespace IIS.OHC
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using ICSSoft.Services;
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Exceptions;
    using ICSSoft.STORMNET.Business.Audit.HelpStructures;
    using ICSSoft.STORMNET.Business.Audit.Objects;


    public class OHCAuditService : ICSSoft.STORMNET.Business.Audit.AuditService, ICSSoft.STORMNET.Business.Audit.IAuditService
    {
        
        public override void AddCreateAuditInformation(DataObject operationedObject)
        {
            var dataObjectWithAuditFields = operationedObject as IDataObjectWithAuditFields;
            if (dataObjectWithAuditFields != null)
            {
                // Добавляем поля, кто же создал объект. //TODO: определить эту запись в правильное место.
                dataObjectWithAuditFields.CreateTime = DateTime.UtcNow;
                dataObjectWithAuditFields.Creator = GetCurrentUserInfo(ApplicationMode, true);
                LogService.LogDebug("AddCreateAuditInformation!!!!");
            }
        }

        public override void AddEditAuditInformation(DataObject operationedObject)
        {
            var dataObjectWithAuditFields = operationedObject as IDataObjectWithAuditFields;
            if (dataObjectWithAuditFields != null)
            {
                // Добавляем поля, кто же изменил объект. //TODO: определить эту запись в правильное место.
                operationedObject.AddLoadedProperties(new List<string> { "EditTime", "Editor" });
                dataObjectWithAuditFields.EditTime = DateTime.UtcNow;
                dataObjectWithAuditFields.Editor = GetCurrentUserInfo(ApplicationMode, true);

                LogService.LogDebug("AddEditAuditInformation!!!!");
            }
        }

        protected override void CheckAndSendToAudit(RatificationAuditParameters ratificationAuditParameters, bool checkClassAuditSettings)
        {
            base.CheckAndSendToAudit(ratificationAuditParameters, checkClassAuditSettings);
        }
        protected override bool RatifyAuditOperation(tExecutionVariant executionVariant, List<AuditAdditionalInfo> auditOperationInfoList, string dataServiceConnectionString, Type dataServiceType, bool throwExceptions, bool checkClassAuditSettings = false)
        {

            LogService.LogDebug("AuditInformation!!!!");
            try
            {
                if (AppSetting == null || !AppSetting.AuditEnabled)
                {
                    throw new DisabledAuditException();
                }

                if (auditOperationInfoList != null && auditOperationInfoList.Count > 0)
                {
                    // Настройки вообще есть и аудит для приложения включён.
                    var auditRatifyParameters = new RatificationAuditParameters(
                        executionVariant,
                        DateTime.UtcNow,
                        auditOperationInfoList,
                        AppSetting.DefaultWriteMode,
                        ApplicationMode,
                        AppSetting.IsDatabaseLocal
                                        ? GetConnectionStringName(dataServiceConnectionString, dataServiceType)
                                        : AppSetting.AuditConnectionStringName,
                        IsAuditRemote)
                    { ThrowExceptions = throwExceptions };

                    CheckAndSendToAudit(auditRatifyParameters, checkClassAuditSettings);
                }
                
                return true;
            }
            catch (Exception ex)
            {
                ErrorProcesser.ProcessAuditError(ex, "AuditService, RatifyAuditOperation", throwExceptions);
                return false;
            }
        }

        private static string GetCurrentUserInfo(AppMode curMode, bool needNameNotLogin)
        {
            // Сначала пробуем определить имя пользователя через CurrentUserService.
            try
            {
                // Данный метод должен отработать как в win, так и в web.
                var currentUser = CurrentUserService.CurrentUser;
                if (currentUser != null)
                {
                    if (needNameNotLogin)
                    {
                        var friendlyName = currentUser.FriendlyName;
                        if (CheckHelper.IsNullOrWhiteSpace(friendlyName))
                        {
                            return friendlyName;
                        }
                    }
                    else
                    {
                        if (CheckHelper.IsNullOrWhiteSpace(currentUser.Domain))
                        {
                            return string.Join("\\", new[] { currentUser.Domain, currentUser.Login });
                        }

                        return currentUser.Login;
                    }

                    // Дружественное имя не определено. Используется логин.
                    var loginName = currentUser.Login;
                    if (CheckHelper.IsNullOrWhiteSpace(loginName))
                    {
                        return loginName;
                    }
                }
            }
            catch (Exception ex)
            {
                LogService.LogError("AuditService, GetCurrentUserInfo: Произошла ошибка при работе с CurrentUserService", ex);
            }
            
            // Потом, если web, по старинке через HttpContext.Current.User.Identity.
            if (curMode == AppMode.Web
                    && HttpContext.Current != null
                    && HttpContext.Current.User != null
                    && HttpContext.Current.User.Identity != null
                    && !string.IsNullOrEmpty(HttpContext.Current.User.Identity.Name))
            {
                return HttpContext.Current.User.Identity.Name;
            }
            
            // TODO: подумать, что стоит делать.
            throw new DataNotFoundAuditException("не удалось определить текущего пользователя");
        }
        
    }
}
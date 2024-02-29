using System;
using System.Net;

using ICSSoft.Services;
using ICSSoft.STORMNET;
using ICSSoft.STORMNET.Business;

using NewPlatform.Flexberry.Security;
using NewPlatform.Flexberry.Services;

using UnauthorizedAccessException = ICSSoft.STORMNET.UnauthorizedAccessException;

// using MMC.Helpers;

namespace IIS.OHC
{
    public class ODataEvents
    {
        //private ServiceLockHelper _slh = new ServiceLockHelper();

        private static bool HasAgent()
        {
            CurrentUserService.IUser agent = null;
            try
            {
                // Для учёта аудита сессии пользователя обращаемся к текущему пользователю.
                agent = CurrentUserService.CurrentUser;
            }
            catch (Exception e)
            {
                LogService.LogError(nameof(HasAgent), e);
            }

            return agent != null;
        }

        /// <summary>
        /// Обработчик, вызываемый перед выполнением запроса.
        /// </summary>
        /// <param name="lcs">.</param>
        /// <returns><see langword="true" /> для продолжения операции.</returns>
        public static bool BeforeGet(ref LoadingCustomizationStruct lcs)
        {
            return HasAgent();
        }

        /// <summary>
        /// Обработчик, вызываемый перед созданием объекта.
        /// </summary>
        /// <param name="obj">Объект.</param>
        /// <returns><see langword="true" /> для продолжения операции.</returns>
        public static bool BeforeCreate(DataObject obj)
        {
            bool res = false;
            if (obj is IIS.Caseberry.Logging.Objects.ApplicationLog log)
            {
                log.Timestamp = log.Timestamp.ToUniversalTime();
                log.Title = CurrentUserService.CurrentUser.Login; // Не используется никак, поэтому будем жестко писать логин пользователя.

                // Логи пишем в любом случае.
                res = true;
            }

            return res || HasAgent();
        }

        /// <summary>
        /// Обработчик, вызываемый перед изменением объекта.
        /// </summary>
        /// <param name="obj">Объект.</param>
        /// <returns><see langword="true" /> для продолжения операции.</returns>
        public static bool BeforeUpdate(DataObject obj)
        {
            var type = obj.GetType();
            ObjectStatus objectStatus = obj.GetStatus();

            if (type != typeof(Lock) && objectStatus == ObjectStatus.Altered)
            {
              //  new ServiceLockHelper().CheckObjectLock(obj);
            }

            return HasAgent();
        }

        /// <summary>
        /// Обработчик, вызываемый перед удалением объекта.
        /// </summary>
        /// <param name="obj">Объект.</param>
        /// <returns><see langword="true" /> для продолжения операции.</returns>
        public static bool BeforeDelete(DataObject obj)
        {
            var type = obj.GetType();

            if (type != typeof(Lock))
            {
             //   new ServiceLockHelper().CheckObjectLock(obj);
            }

            return HasAgent();
        }

        /// <summary>
        /// Обработчик, вызываемый после создания объекта.
        /// </summary>
        /// <param name="dataObject">Объект после создания.</param>
        public static void AfterCreate(DataObject dataObject)
        {
        }

        /// <summary>
        /// Обработчик, вызываемый после обновления объекта.
        /// </summary>
        /// <param name="dataObject">Объект после обновления.</param>
        public static void AfterUpdate(DataObject dataObject)
        {
        }

        /// <summary>
        /// Обработчик, вызываемый после возникновения исключения.
        /// </summary>
        /// <param name="ex">Исключение, которое возникло внутри ODataService.</param>
        /// <param name="code">Возвращаемый код HTTP. По-умолчанияю 500.</param>
        /// <returns>Исключение, которое будет отправлено клиенту.</returns>
        public static Exception AfterInternalServerError(Exception ex, ref HttpStatusCode code)
        {
            LogService.LogError(nameof(AfterInternalServerError), ex);

            Type exType = ex.GetType();

            const string postfix = "Обратитесь к администратору системы.";

            if (exType == typeof(ExecutingQueryException))
            {
                return new Exception($"Произошла ошибка в базе данных. {postfix}");
            }

            if (exType == typeof(UnauthorizedAccessException))
            {
                return new Exception($"Недостаточно полномочий для выполнения операции. ");
            }

            return new Exception($"{ex.Message}");
        }
    }
}
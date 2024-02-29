namespace IIS.OHC.Controllers
{
    using System;
    using System.Web.Http;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Objects;

    /// <summary>
    /// Работа с аудитом.
    /// </summary>
    [RoutePrefix("api/audit")]
    [Authorize]
    public class AuditController : ApiController
    {
        /// <summary>
        /// Записать аудит операции.
        /// </summary>
        /// <param name="operation">Имя операции.</param>
        /// <returns>GUID объекта аудита.</returns>
        [Route("WriteCustomAudit/{operation}")]
        [HttpPost]
        public string WriteCustomAudit(string operation)
        {
            try
            {
                var guid = AuditService.Current.WriteCustomAuditOperation(new CustomAuditParameters()
                {
                    CustomAuditOperation = operation,
                    AuditObjectTypeOrDescription = operation,
                    ExecutionResult = tExecutionVariant.Executed,
                    OperationTime = DateTime.UtcNow

                }, true);

                return guid != null ? guid.Value.ToString() : string.Empty;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
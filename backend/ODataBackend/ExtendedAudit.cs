
namespace IIS.OHC
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business.Audit;

    public class ExtendedAudit : ICSSoft.STORMNET.Business.Audit.Audit, IAudit
    {
        void IAudit.RatifyAuditOperation(ICSSoft.STORMNET.Business.Audit.RatificationAuditParameters ratificationAuditParameters)
        {
            LogService.LogDebug("AuditInformation!!!!");
        }

        Guid IAudit.WriteCommonAuditOperation(ICSSoft.STORMNET.Business.Audit.CommonAuditParameters commonAuditParameters)
        {
            Guid guid = new Guid();

            LogService.LogDebug("AuditInformation!!!!");

            return guid;
        }
     /*   
        public override Guid WriteCommonAuditOperation(CommonAuditParameters commonAuditParameters)
        {
            throw new NotImplementedException();
        }

       */
    }
}
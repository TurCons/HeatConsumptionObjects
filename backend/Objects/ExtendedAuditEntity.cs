﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OHC
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// ExtendedAuditEntity.
    /// </summary>
    // *** Start programmer edit section *** (ExtendedAuditEntity CustomAttributes)

    // *** End programmer edit section *** (ExtendedAuditEntity CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ExtendedAuditEntityL", new string[] {
        "OperationTime",
        "ObjectPrimaryKey",
        "OperationType",
        "ExecutionResult",
        "ObjectType.Name",
        "User.Login",
        "SerializedField",
        "ChangedFields",
        "CustomField",
        "ObjectCaption"})]
    public class ExtendedAuditEntity : ICSSoft.STORMNET.Business.Audit.Objects.AuditEntity // ICSSoft.STORMNET.DataObject
    {
        
        private string fChangedFields;
        
        private string fCustomField;
        
        private string fObjectCaption;
        
        // *** Start programmer edit section *** (ExtendedAuditEntity CustomMembers)

        // *** End programmer edit section *** (ExtendedAuditEntity CustomMembers)

        
        /// <summary>
        /// ChangedFields.
        /// </summary>
        // *** Start programmer edit section *** (ExtendedAuditEntity.ChangedFields CustomAttributes)

        // *** End programmer edit section *** (ExtendedAuditEntity.ChangedFields CustomAttributes)
        [StrLen(255)]
        public virtual string ChangedFields
        {
            get
            {
                // *** Start programmer edit section *** (ExtendedAuditEntity.ChangedFields Get start)

                // *** End programmer edit section *** (ExtendedAuditEntity.ChangedFields Get start)
                string result = this.fChangedFields;
                // *** Start programmer edit section *** (ExtendedAuditEntity.ChangedFields Get end)

                // *** End programmer edit section *** (ExtendedAuditEntity.ChangedFields Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ExtendedAuditEntity.ChangedFields Set start)

                // *** End programmer edit section *** (ExtendedAuditEntity.ChangedFields Set start)
                this.fChangedFields = value;
                // *** Start programmer edit section *** (ExtendedAuditEntity.ChangedFields Set end)

                // *** End programmer edit section *** (ExtendedAuditEntity.ChangedFields Set end)
            }
        }
        
        /// <summary>
        /// CustomField.
        /// </summary>
        // *** Start programmer edit section *** (ExtendedAuditEntity.CustomField CustomAttributes)

        // *** End programmer edit section *** (ExtendedAuditEntity.CustomField CustomAttributes)
        [StrLen(255)]
        public virtual string CustomField
        {
            get
            {
                // *** Start programmer edit section *** (ExtendedAuditEntity.CustomField Get start)

                // *** End programmer edit section *** (ExtendedAuditEntity.CustomField Get start)
                string result = this.fCustomField;
                // *** Start programmer edit section *** (ExtendedAuditEntity.CustomField Get end)

                // *** End programmer edit section *** (ExtendedAuditEntity.CustomField Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ExtendedAuditEntity.CustomField Set start)

                // *** End programmer edit section *** (ExtendedAuditEntity.CustomField Set start)
                this.fCustomField = value;
                // *** Start programmer edit section *** (ExtendedAuditEntity.CustomField Set end)

                // *** End programmer edit section *** (ExtendedAuditEntity.CustomField Set end)
            }
        }
        
        /// <summary>
        /// ObjectCaption.
        /// </summary>
        // *** Start programmer edit section *** (ExtendedAuditEntity.ObjectCaption CustomAttributes)

        // *** End programmer edit section *** (ExtendedAuditEntity.ObjectCaption CustomAttributes)
        [StrLen(255)]
        public virtual string ObjectCaption
        {
            get
            {
                             // *** Start programmer edit section *** (ExtendedAuditEntity.ObjectCaption Get start)

                // *** End programmer edit section *** (ExtendedAuditEntity.ObjectCaption Get start)
                string result = this.fObjectCaption;
                // *** Start programmer edit section *** (ExtendedAuditEntity.ObjectCaption Get end)

                // *** End programmer edit section *** (ExtendedAuditEntity.ObjectCaption Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ExtendedAuditEntity.ObjectCaption Set start)

                // *** End programmer edit section *** (ExtendedAuditEntity.ObjectCaption Set start)
                this.fObjectCaption = value;
                // *** Start programmer edit section *** (ExtendedAuditEntity.ObjectCaption Set end)

                // *** End programmer edit section *** (ExtendedAuditEntity.ObjectCaption Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ExtendedAuditEntityL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ExtendedAuditEntityL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ExtendedAuditEntityL", typeof(IIS.OHC.ExtendedAuditEntity));
                }
            }
        }
    }
}

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
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Objects;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Потребитель.
    /// </summary>
    // *** Start programmer edit section *** (Consumer CustomAttributes)

    // *** End programmer edit section *** (Consumer CustomAttributes)
    [AutoAltered()]
    [Caption("Потребитель")]
    [AccessType(ICSSoft.STORMNET.AccessType.@this)]
    [View("AuditView", new string[] {
            "PersonalAccount as \'Personal account\'"})]
    [View("ConsumerE", new string[] {
            "PersonalAccount as \'Лицевой счет\'"})]
    [View("ConsumerL", new string[] {
            "PersonalAccount as \'Лицевой счет\'"})]
    public class Consumer : ICSSoft.STORMNET.DataObject, IDataObjectWithAuditFields
    {
        
        private string fPersonalAccount;
        
        private System.Nullable<System.DateTime> fCreateTime;
        
        private string fCreator;
        
        private System.Nullable<System.DateTime> fEditTime;
        
        private string fEditor;
        
        // *** Start programmer edit section *** (Consumer CustomMembers)

        // *** End programmer edit section *** (Consumer CustomMembers)

        
        /// <summary>
        /// Лицевой счет.
        /// </summary>
        // *** Start programmer edit section *** (Consumer.PersonalAccount CustomAttributes)

        // *** End programmer edit section *** (Consumer.PersonalAccount CustomAttributes)
        [StrLen(255)]
        public virtual string PersonalAccount
        {
            get
            {
                // *** Start programmer edit section *** (Consumer.PersonalAccount Get start)

                // *** End programmer edit section *** (Consumer.PersonalAccount Get start)
                string result = this.fPersonalAccount;
                // *** Start programmer edit section *** (Consumer.PersonalAccount Get end)

                // *** End programmer edit section *** (Consumer.PersonalAccount Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Consumer.PersonalAccount Set start)

                // *** End programmer edit section *** (Consumer.PersonalAccount Set start)
                this.fPersonalAccount = value;
                // *** Start programmer edit section *** (Consumer.PersonalAccount Set end)

                // *** End programmer edit section *** (Consumer.PersonalAccount Set end)
            }
        }
        
        /// <summary>
        /// Время создания объекта.
        /// </summary>
        // *** Start programmer edit section *** (Consumer.CreateTime CustomAttributes)

        // *** End programmer edit section *** (Consumer.CreateTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> CreateTime
        {
            get
            {
                // *** Start programmer edit section *** (Consumer.CreateTime Get start)

                // *** End programmer edit section *** (Consumer.CreateTime Get start)
                System.Nullable<System.DateTime> result = this.fCreateTime;
                // *** Start programmer edit section *** (Consumer.CreateTime Get end)

                // *** End programmer edit section *** (Consumer.CreateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Consumer.CreateTime Set start)

                // *** End programmer edit section *** (Consumer.CreateTime Set start)
                this.fCreateTime = value;
                // *** Start programmer edit section *** (Consumer.CreateTime Set end)

                // *** End programmer edit section *** (Consumer.CreateTime Set end)
            }
        }
        
        /// <summary>
        /// Создатель объекта.
        /// </summary>
        // *** Start programmer edit section *** (Consumer.Creator CustomAttributes)

        // *** End programmer edit section *** (Consumer.Creator CustomAttributes)
        [StrLen(255)]
        public virtual string Creator
        {
            get
            {
                // *** Start programmer edit section *** (Consumer.Creator Get start)

                // *** End programmer edit section *** (Consumer.Creator Get start)
                string result = this.fCreator;
                // *** Start programmer edit section *** (Consumer.Creator Get end)

                // *** End programmer edit section *** (Consumer.Creator Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Consumer.Creator Set start)

                // *** End programmer edit section *** (Consumer.Creator Set start)
                this.fCreator = value;
                // *** Start programmer edit section *** (Consumer.Creator Set end)

                // *** End programmer edit section *** (Consumer.Creator Set end)
            }
        }
        
        /// <summary>
        /// Время последнего редактирования объекта.
        /// </summary>
        // *** Start programmer edit section *** (Consumer.EditTime CustomAttributes)

        // *** End programmer edit section *** (Consumer.EditTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> EditTime
        {
            get
            {
                // *** Start programmer edit section *** (Consumer.EditTime Get start)

                // *** End programmer edit section *** (Consumer.EditTime Get start)
                System.Nullable<System.DateTime> result = this.fEditTime;
                // *** Start programmer edit section *** (Consumer.EditTime Get end)

                // *** End programmer edit section *** (Consumer.EditTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Consumer.EditTime Set start)

                // *** End programmer edit section *** (Consumer.EditTime Set start)
                this.fEditTime = value;
                // *** Start programmer edit section *** (Consumer.EditTime Set end)

                // *** End programmer edit section *** (Consumer.EditTime Set end)
            }
        }
        
        /// <summary>
        /// Последний редактор объекта.
        /// </summary>
        // *** Start programmer edit section *** (Consumer.Editor CustomAttributes)

        // *** End programmer edit section *** (Consumer.Editor CustomAttributes)
        [StrLen(255)]
        public virtual string Editor
        {
            get
            {
                // *** Start programmer edit section *** (Consumer.Editor Get start)

                // *** End programmer edit section *** (Consumer.Editor Get start)
                string result = this.fEditor;
                // *** Start programmer edit section *** (Consumer.Editor Get end)

                // *** End programmer edit section *** (Consumer.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Consumer.Editor Set start)

                // *** End programmer edit section *** (Consumer.Editor Set start)
                this.fEditor = value;
                // *** Start programmer edit section *** (Consumer.Editor Set end)

                // *** End programmer edit section *** (Consumer.Editor Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "AuditView" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AuditView
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AuditView", typeof(IIS.OHC.Consumer));
                }
            }
            
            /// <summary>
            /// "ConsumerE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ConsumerE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ConsumerE", typeof(IIS.OHC.Consumer));
                }
            }
            
            /// <summary>
            /// "ConsumerL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ConsumerL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ConsumerL", typeof(IIS.OHC.Consumer));
                }
            }
        }
        
        /// <summary>
        /// Audit class settings.
        /// </summary>
        public class AuditSettings
        {
            
            /// <summary>
            /// Включён ли аудит для класса.
            /// </summary>
            public static bool AuditEnabled = true;
            
            /// <summary>
            /// Использовать имя представления для аудита по умолчанию.
            /// </summary>
            public static bool UseDefaultView = false;
            
            /// <summary>
            /// Включён ли аудит операции чтения.
            /// </summary>
            public static bool SelectAudit = false;
            
            /// <summary>
            /// Имя представления для аудирования операции чтения.
            /// </summary>
            public static string SelectAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции создания.
            /// </summary>
            public static bool InsertAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции создания.
            /// </summary>
            public static string InsertAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции изменения.
            /// </summary>
            public static bool UpdateAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции изменения.
            /// </summary>
            public static string UpdateAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции удаления.
            /// </summary>
            public static bool DeleteAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции удаления.
            /// </summary>
            public static string DeleteAuditViewName = "AuditView";
            
            /// <summary>
            /// Путь к форме просмотра результатов аудита.
            /// </summary>
            public static string FormUrl = "";
            
            /// <summary>
            /// Режим записи данных аудита (синхронный или асинхронный).
            /// </summary>
            public static ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode WriteMode = ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode.Synchronous;
            
            /// <summary>
            /// Максимальная длина сохраняемого значения поля (если 0, то строка обрезаться не будет).
            /// </summary>
            public static int PrunningLength = 0;
            
            /// <summary>
            /// Показывать ли пользователям в изменениях первичные ключи.
            /// </summary>
            public static bool ShowPrimaryKey = false;
            
            /// <summary>
            /// Сохранять ли старое значение.
            /// </summary>
            public static bool KeepOldValue = true;
            
            /// <summary>
            /// Сжимать ли сохраняемые значения.
            /// </summary>
            public static bool Compress = false;
            
            /// <summary>
            /// Сохранять ли все значения атрибутов, а не только изменяемые.
            /// </summary>
            public static bool KeepAllValues = false;
        }
    }
}
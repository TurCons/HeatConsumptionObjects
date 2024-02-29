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
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Objects;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Объект теплопотребления.
    /// </summary>
    // *** Start programmer edit section *** (HeatConsumptionObject CustomAttributes)

    // *** End programmer edit section *** (HeatConsumptionObject CustomAttributes)
    [BusinessServer("IIS.OHC.QRandChecker, OHC.BusinessServers", ICSSoft.STORMNET.Business.DataServiceObjectEvents.OnAllEvents)]
    [AutoAltered()]
    [Caption("Объект теплопотребления")]
    [AccessType(ICSSoft.STORMNET.AccessType.@this)]
    [View("AuditView", new string[] {
            "ObjectName as \'Object name\'",
            "RegistrationDate as \'Registration date\'",
            "ObjectSquare as \'Object square\'",
            "QRCode as \'Q r code\'",
            "Building as \'Building\'",
            "Building.Address as \'Address\'",
            "Consumer as \'Consumer\'",
            "Consumer.PersonalAccount as \'Personal account\'"})]
    [AssociatedDetailViewAttribute("AuditView", "NetworkSection", "AuditView", true, "", "Network section", true, new string[] {
            ""})]
    [View("HeatConsumptionObjectE", new string[] {
            "ObjectName as \'Наименование объекта\'",
            "RegistrationDate as \'Дата регистрации\'",
            "ObjectSquare as \'Площадь объекта\'",
            "QRCode as \'QR код\'",
            "Building as \'Здание\'",
            "Building.Address as \'Адрес здания\'",
            "Consumer as \'Потребитель\'",
            "Consumer.PersonalAccount as \'Лицевой счет потребителя\'"})]
    [AssociatedDetailViewAttribute("HeatConsumptionObjectE", "NetworkSection", "NetworkSectionE", true, "", "Network section", true, new string[] {
            ""})]
    [View("HeatConsumptionObjectL", new string[] {
            "ObjectName as \'Наименование ОТП\'",
            "RegistrationDate as \'Дата регистрации\'",
            "ObjectSquare as \'Площадь объекта\'",
            "QRCode as \'QR код\'",
            "Building.Address as \'Адрес здания\'",
            "Consumer.PersonalAccount as \'Лицевой счет потребителя\'"})]
    public class HeatConsumptionObject : ICSSoft.STORMNET.DataObject, IDataObjectWithAuditFields
    {
        
        private string fObjectName;
        
        private System.DateTime fRegistrationDate;
        
        private int fObjectSquare;
        
        private string fQRCode;
        
        private System.Nullable<System.DateTime> fCreateTime;
        
        private string fCreator;
        
        private System.Nullable<System.DateTime> fEditTime;
        
        private string fEditor;
        
        private IIS.OHC.Building fBuilding;
        
        private IIS.OHC.Consumer fConsumer;
        
        private IIS.OHC.DetailArrayOfNetworkSection fNetworkSection;
        
        // *** Start programmer edit section *** (HeatConsumptionObject CustomMembers)

        // *** End programmer edit section *** (HeatConsumptionObject CustomMembers)

        
        /// <summary>
        /// Наименование ОТП.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.ObjectName CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.ObjectName CustomAttributes)
        [StrLen(255)]
        public virtual string ObjectName
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectName Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectName Get start)
                string result = this.fObjectName;
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectName Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectName Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectName Set start)
                this.fObjectName = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectName Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectName Set end)
            }
        }
        
        /// <summary>
        /// Дата регистрации.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.RegistrationDate CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.RegistrationDate CustomAttributes)
        public virtual System.DateTime RegistrationDate
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.RegistrationDate Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.RegistrationDate Get start)
                System.DateTime result = this.fRegistrationDate;
                // *** Start programmer edit section *** (HeatConsumptionObject.RegistrationDate Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.RegistrationDate Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.RegistrationDate Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.RegistrationDate Set start)
                this.fRegistrationDate = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.RegistrationDate Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.RegistrationDate Set end)
            }
        }
        
        /// <summary>
        /// Площадь объекта.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.ObjectSquare CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.ObjectSquare CustomAttributes)
        public virtual int ObjectSquare
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectSquare Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectSquare Get start)
                int result = this.fObjectSquare;
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectSquare Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectSquare Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectSquare Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectSquare Set start)
                this.fObjectSquare = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.ObjectSquare Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.ObjectSquare Set end)
            }
        }
        
        /// <summary>
        /// Буквенно-числовой код.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.QRCode CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.QRCode CustomAttributes)
        [StrLen(255)]
        public virtual string QRCode
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.QRCode Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.QRCode Get start)
                string result = this.fQRCode;
                // *** Start programmer edit section *** (HeatConsumptionObject.QRCode Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.QRCode Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.QRCode Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.QRCode Set start)
                this.fQRCode = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.QRCode Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.QRCode Set end)
            }
        }
        
        /// <summary>
        /// Время создания объекта.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.CreateTime CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.CreateTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> CreateTime
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.CreateTime Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.CreateTime Get start)
                System.Nullable<System.DateTime> result = this.fCreateTime;
                // *** Start programmer edit section *** (HeatConsumptionObject.CreateTime Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.CreateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.CreateTime Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.CreateTime Set start)
                this.fCreateTime = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.CreateTime Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.CreateTime Set end)
            }
        }
        
        /// <summary>
        /// Создатель объекта.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.Creator CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.Creator CustomAttributes)
        [StrLen(255)]
        public virtual string Creator
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Creator Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.Creator Get start)
                string result = this.fCreator;
                // *** Start programmer edit section *** (HeatConsumptionObject.Creator Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.Creator Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Creator Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.Creator Set start)
                this.fCreator = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.Creator Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.Creator Set end)
            }
        }
        
        /// <summary>
        /// Время последнего редактирования объекта.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.EditTime CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.EditTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> EditTime
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.EditTime Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.EditTime Get start)
                System.Nullable<System.DateTime> result = this.fEditTime;
                // *** Start programmer edit section *** (HeatConsumptionObject.EditTime Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.EditTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.EditTime Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.EditTime Set start)
                this.fEditTime = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.EditTime Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.EditTime Set end)
            }
        }
        
        /// <summary>
        /// Последний редактор объекта.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.Editor CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.Editor CustomAttributes)
        [StrLen(255)]
        public virtual string Editor
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Editor Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.Editor Get start)
                string result = this.fEditor;
                // *** Start programmer edit section *** (HeatConsumptionObject.Editor Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Editor Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.Editor Set start)
                this.fEditor = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.Editor Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.Editor Set end)
            }
        }
        
        /// <summary>
        /// Объект теплопотребления.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.Building CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.Building CustomAttributes)
        [PropertyStorage(new string[] {
                "Building"})]
        [NotNull()]
        public virtual IIS.OHC.Building Building
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Building Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.Building Get start)
                IIS.OHC.Building result = this.fBuilding;
                // *** Start programmer edit section *** (HeatConsumptionObject.Building Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.Building Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Building Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.Building Set start)
                this.fBuilding = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.Building Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.Building Set end)
            }
        }
        
        /// <summary>
        /// Объект теплопотребления.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.Consumer CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.Consumer CustomAttributes)
        [PropertyStorage(new string[] {
                "Consumer"})]
        [NotNull()]
        public virtual IIS.OHC.Consumer Consumer
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Consumer Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.Consumer Get start)
                IIS.OHC.Consumer result = this.fConsumer;
                // *** Start programmer edit section *** (HeatConsumptionObject.Consumer Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.Consumer Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.Consumer Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.Consumer Set start)
                this.fConsumer = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.Consumer Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.Consumer Set end)
            }
        }
        
        /// <summary>
        /// Объект теплопотребления.
        /// </summary>
        // *** Start programmer edit section *** (HeatConsumptionObject.NetworkSection CustomAttributes)

        // *** End programmer edit section *** (HeatConsumptionObject.NetworkSection CustomAttributes)
        public virtual IIS.OHC.DetailArrayOfNetworkSection NetworkSection
        {
            get
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.NetworkSection Get start)

                // *** End programmer edit section *** (HeatConsumptionObject.NetworkSection Get start)
                if ((this.fNetworkSection == null))
                {
                    this.fNetworkSection = new IIS.OHC.DetailArrayOfNetworkSection(this);
                }
                IIS.OHC.DetailArrayOfNetworkSection result = this.fNetworkSection;
                // *** Start programmer edit section *** (HeatConsumptionObject.NetworkSection Get end)

                // *** End programmer edit section *** (HeatConsumptionObject.NetworkSection Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (HeatConsumptionObject.NetworkSection Set start)

                // *** End programmer edit section *** (HeatConsumptionObject.NetworkSection Set start)
                this.fNetworkSection = value;
                // *** Start programmer edit section *** (HeatConsumptionObject.NetworkSection Set end)

                // *** End programmer edit section *** (HeatConsumptionObject.NetworkSection Set end)
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
                    return ICSSoft.STORMNET.Information.GetView("AuditView", typeof(IIS.OHC.HeatConsumptionObject));
                }
            }
            
            /// <summary>
            /// "HeatConsumptionObjectE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View HeatConsumptionObjectE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("HeatConsumptionObjectE", typeof(IIS.OHC.HeatConsumptionObject));
                }
            }
            
            /// <summary>
            /// "HeatConsumptionObjectL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View HeatConsumptionObjectL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("HeatConsumptionObjectL", typeof(IIS.OHC.HeatConsumptionObject));
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

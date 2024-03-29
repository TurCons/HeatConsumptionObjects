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
    /// Здание.
    /// </summary>
    // *** Start programmer edit section *** (Building CustomAttributes)

    // *** End programmer edit section *** (Building CustomAttributes)
    [AutoAltered()]
    [Caption("Здание")]
    [AccessType(ICSSoft.STORMNET.AccessType.@this)]
    [View("AuditView", new string[] {
            "Address as \'Address\'",
            "ResultSquare as \'Result square\'",
            "NetworkArea as \'Network area\'",
            "NetworkArea.AreaName as \'Area name\'"})]
    [View("BuildingE", new string[] {
            "NetworkArea",
            "NetworkArea.AreaName as \'Район\'",
            "Address as \'Адрес\'",
            "ResultSquare as \'Общая площадь\'",
            "ResultSquare_notStored as \'Общая площадь не хранимая\'"})]
    [View("BuildingL", new string[] {
            "NetworkArea.AreaName as \'Название района\'",
            "Address as \'Адрес\'",
            "ResultSquare as \'Общая площадь ОТП\'",
            "ResultSquare_notStored as \'общая площадь не хранимая\'"})]
    public class Building : ICSSoft.STORMNET.DataObject, IDataObjectWithAuditFields
    {
        
        private string fAddress;
        
        private int fResultSquare;
        
        private System.Nullable<System.DateTime> fCreateTime;
        
        private string fCreator;
        
        private System.Nullable<System.DateTime> fEditTime;
        
        private string fEditor;
        
        private IIS.OHC.NetworkArea fNetworkArea;
        
        // *** Start programmer edit section *** (Building CustomMembers)

        // *** End programmer edit section *** (Building CustomMembers)

        
        /// <summary>
        /// Адрес здания.
        /// </summary>
        // *** Start programmer edit section *** (Building.Address CustomAttributes)

        // *** End programmer edit section *** (Building.Address CustomAttributes)
        [StrLen(255)]
        public virtual string Address
        {
            get
            {
                // *** Start programmer edit section *** (Building.Address Get start)

                // *** End programmer edit section *** (Building.Address Get start)
                string result = this.fAddress;
                // *** Start programmer edit section *** (Building.Address Get end)

                // *** End programmer edit section *** (Building.Address Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Building.Address Set start)

                // *** End programmer edit section *** (Building.Address Set start)
                this.fAddress = value;
                // *** Start programmer edit section *** (Building.Address Set end)

                // *** End programmer edit section *** (Building.Address Set end)
            }
        }
        
        /// <summary>
        /// Общая площадь ОТП.
        /// </summary>
        // *** Start programmer edit section *** (Building.ResultSquare CustomAttributes)

        // *** End programmer edit section *** (Building.ResultSquare CustomAttributes)
        public virtual int ResultSquare
        {
            get
            {
                // *** Start programmer edit section *** (Building.ResultSquare Get start)

                // *** End programmer edit section *** (Building.ResultSquare Get start)
                int result = this.fResultSquare;
                // *** Start programmer edit section *** (Building.ResultSquare Get end)

                // *** End programmer edit section *** (Building.ResultSquare Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Building.ResultSquare Set start)

                // *** End programmer edit section *** (Building.ResultSquare Set start)
                this.fResultSquare = value;
                // *** Start programmer edit section *** (Building.ResultSquare Set end)

                // *** End programmer edit section *** (Building.ResultSquare Set end)
            }
        }
        
        /// <summary>
        /// Время создания объекта.
        /// </summary>
        // *** Start programmer edit section *** (Building.CreateTime CustomAttributes)

        // *** End programmer edit section *** (Building.CreateTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> CreateTime
        {
            get
            {
                // *** Start programmer edit section *** (Building.CreateTime Get start)

                // *** End programmer edit section *** (Building.CreateTime Get start)
                System.Nullable<System.DateTime> result = this.fCreateTime;
                // *** Start programmer edit section *** (Building.CreateTime Get end)

                // *** End programmer edit section *** (Building.CreateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Building.CreateTime Set start)

                // *** End programmer edit section *** (Building.CreateTime Set start)
                this.fCreateTime = value;
                // *** Start programmer edit section *** (Building.CreateTime Set end)

                // *** End programmer edit section *** (Building.CreateTime Set end)
            }
        }
        
        /// <summary>
        /// Создатель объекта.
        /// </summary>
        // *** Start programmer edit section *** (Building.Creator CustomAttributes)

        // *** End programmer edit section *** (Building.Creator CustomAttributes)
        [StrLen(255)]
        public virtual string Creator
        {
            get
            {
                // *** Start programmer edit section *** (Building.Creator Get start)

                // *** End programmer edit section *** (Building.Creator Get start)
                string result = this.fCreator;
                // *** Start programmer edit section *** (Building.Creator Get end)

                // *** End programmer edit section *** (Building.Creator Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Building.Creator Set start)

                // *** End programmer edit section *** (Building.Creator Set start)
                this.fCreator = value;
                // *** Start programmer edit section *** (Building.Creator Set end)

                // *** End programmer edit section *** (Building.Creator Set end)
            }
        }
        
        /// <summary>
        /// Время последнего редактирования объекта.
        /// </summary>
        // *** Start programmer edit section *** (Building.EditTime CustomAttributes)

        // *** End programmer edit section *** (Building.EditTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> EditTime
        {
            get
            {
                // *** Start programmer edit section *** (Building.EditTime Get start)

                // *** End programmer edit section *** (Building.EditTime Get start)
                System.Nullable<System.DateTime> result = this.fEditTime;
                // *** Start programmer edit section *** (Building.EditTime Get end)

                // *** End programmer edit section *** (Building.EditTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Building.EditTime Set start)

                // *** End programmer edit section *** (Building.EditTime Set start)
                this.fEditTime = value;
                // *** Start programmer edit section *** (Building.EditTime Set end)

                // *** End programmer edit section *** (Building.EditTime Set end)
            }
        }
        
        /// <summary>
        /// Последний редактор объекта.
        /// </summary>
        // *** Start programmer edit section *** (Building.Editor CustomAttributes)

        // *** End programmer edit section *** (Building.Editor CustomAttributes)
        [StrLen(255)]
        public virtual string Editor
        {
            get
            {
                // *** Start programmer edit section *** (Building.Editor Get start)

                // *** End programmer edit section *** (Building.Editor Get start)
                string result = this.fEditor;
                // *** Start programmer edit section *** (Building.Editor Get end)

                // *** End programmer edit section *** (Building.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Building.Editor Set start)

                // *** End programmer edit section *** (Building.Editor Set start)
                this.fEditor = value;
                // *** Start programmer edit section *** (Building.Editor Set end)

                // *** End programmer edit section *** (Building.Editor Set end)
            }
        }
        
        /// <summary>
        /// не хранимиое поле с результирующей площадью.
        /// </summary>
        // *** Start programmer edit section *** (Building.ResultSquare_notStored CustomAttributes)

        // *** End programmer edit section *** (Building.ResultSquare_notStored CustomAttributes)
        [ICSSoft.STORMNET.NotStored()]
        [DataServiceExpression(typeof(ICSSoft.STORMNET.Business.MSSQLDataService), "SELECT sum(t0.ObjectSquare)  FROM [db0].[dbo].[HeatConsumptionObject] t0 where t0" +
            ".Building = CAST(STORMMainObjectKey")]
        public virtual int ResultSquare_notStored
        {
            get
            {
                // *** Start programmer edit section *** (Building.ResultSquare_notStored Get)

                return 0;
                // *** End programmer edit section *** (Building.ResultSquare_notStored Get)
            }
            set
            {
                // *** Start programmer edit section *** (Building.ResultSquare_notStored Set)

                // *** End programmer edit section *** (Building.ResultSquare_notStored Set)
            }
        }
        
        /// <summary>
        /// Здание.
        /// </summary>
        // *** Start programmer edit section *** (Building.NetworkArea CustomAttributes)

        // *** End programmer edit section *** (Building.NetworkArea CustomAttributes)
        [PropertyStorage(new string[] {
                "NetworkArea"})]
        [NotNull()]
        public virtual IIS.OHC.NetworkArea NetworkArea
        {
            get
            {
                // *** Start programmer edit section *** (Building.NetworkArea Get start)

                // *** End programmer edit section *** (Building.NetworkArea Get start)
                IIS.OHC.NetworkArea result = this.fNetworkArea;
                // *** Start programmer edit section *** (Building.NetworkArea Get end)

                // *** End programmer edit section *** (Building.NetworkArea Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Building.NetworkArea Set start)

                // *** End programmer edit section *** (Building.NetworkArea Set start)
                this.fNetworkArea = value;
                // *** Start programmer edit section *** (Building.NetworkArea Set end)

                // *** End programmer edit section *** (Building.NetworkArea Set end)
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
                    return ICSSoft.STORMNET.Information.GetView("AuditView", typeof(IIS.OHC.Building));
                }
            }
            
            /// <summary>
            /// "BuildingE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BuildingE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BuildingE", typeof(IIS.OHC.Building));
                }
            }
            
            /// <summary>
            /// "BuildingL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BuildingL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BuildingL", typeof(IIS.OHC.Building));
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

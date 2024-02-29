namespace IIS.OHC
{
    using System.Configuration;

    public static class AppConfigHelper
    {
        public const string BackendDebugParam = "BackendDebug";

        public static bool BackendDebug
        {
            get
            {
                var p = ConfigurationManager.AppSettings[BackendDebugParam];
                bool result = false;
                return !string.IsNullOrWhiteSpace(p) && bool.TryParse(p, out result) && result;
            }
        }
    }
}
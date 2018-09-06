/**
* PBAppStorageConst -
* Provides keys for storing and identifing objects
* when put into or are received from browser storage
*/
export class PbAppStorageConst {
    /**
    * Identifier that should be used as powerbot main browser
    * storage instance name
    */
    public static readonly PB_MAIN_STORAGE = 'pb_main_storage';
    /**
    * Identifier that should be used for powerbot production-connection-settings
    */
    public static readonly PB_SETTINGS_PRODUCTION = 'pb_settings_production';
    /**
    * Identifier that should be used for powerbot test-connection-settings
    */
    public static readonly PB_SETTINGS_TEST = 'pb_settings_test';
    /**
    * Identifier that should be used for powerbot test-connection-settings
    */
    public static readonly PB_SETTINGS_LOGGING = 'pb_settings_logging';
    /**
    * Identifier that should be used for powerbot test-connection-settings
    */
    public static readonly PB_SETTINGS_MARKET = 'pb_settings_market';
}

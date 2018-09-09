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
    public static readonly CONFIG_PRODUCTION = 'pb_config_production';
    /**
    * Identifier that should be used for powerbot test-connection-settings
    */
    public static readonly CONFIG_TEST = 'pb_config_test';
    /**
    * Identifier that should be used for powerbot test-connection-settings
    */
    public static readonly CONFIG_LOGGING = 'pb_config_logging';
    /**
    * Identifier that should be used for powerbot test-connection-settings
    */
    public static readonly CONFIG_MARKET = 'pb_config_market';
}

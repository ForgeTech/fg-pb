import {
  ConfigLogging,
  ConfigConnection,
  ConfigView,
  ConfigApiKey,
  ConfigDebug
 } from './entity.export';
/**
 * ConfigPowerBot -
 * Entity-Class used to hold configuration
 * for powerbot application
 */
export class ConfigPowerbot {
  /** Constructor */
  constructor(
    /**
    * Flag set from environment configuration to run
    * powerbot in debug mode and enable additional and/or
    * experimental features
    */
    public debug: boolean = false,
    /**
     * Contains configured value for orderbook back_hours
     * setting delivering expired contacts of the past x hours
     */
    public backHours: number = 1,
    /**
    * Flag indicating dark-theme mode
    */
    public darkTheme: boolean = false,
    /**
    * Languguage available for powerbot client
    */
    public languages: string[] = [],
    /**
    * Languguage to be used within powerbot
    */
    public lang: string = '',
    /**
     * Holds logging-service connection-configuration
     */
    public logConfig: ConfigLogging = new ConfigLogging(),
    /**
     * Holds powerbot production-server connection-configuration
     */
    public prodConfig: ConfigConnection = new ConfigConnection(),
    /**
     * Holds powerbot test-server connection-configuration
     */
    public testConfig: ConfigConnection = new ConfigConnection(),
    /**
     * Holds powerbot test-server connection-configuration
     */
    public viewConfig: ConfigView[] = [],
    /**
     * Holds values related to api-key generation
     * - only exist if set from environment file
     */
    public apiKeyConfig: null | ConfigApiKey = null,
    /**
     * Holds values related to web-application debugging
     * only available when application is run in debug mode
     * configured in environment file
     */
    public debugConfig?: ConfigDebug,
  ) {}
}

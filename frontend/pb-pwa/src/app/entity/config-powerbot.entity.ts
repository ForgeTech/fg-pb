import {
  ConfigLoggingConnection,
  ConfigMarketConnection,
  ConfigProductionConnection,
  ConfigTestConnection,
  ConfigView
 } from './entity.export';
import { ConfigDebug } from './config-debug-entity';
import { ConfigAuth } from './config-auth.entity';
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
     * Contains the key for the currently configured market
     */
    public deliverArea: string = "",
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
    public lang: string = 'en',
    /**
     * Holds logging-service connection-configuration
     */
    public logConfig: ConfigLoggingConnection = new ConfigLoggingConnection(),
    /**
     * Holds market-service connection-configuration
     */
    public marketConfig: ConfigMarketConnection = new ConfigMarketConnection(),
    /**
     * Holds powerbot production-server connection-configuration
     */
    public prodConfig: ConfigProductionConnection = new ConfigProductionConnection(),
    /**
     * Holds powerbot test-server connection-configuration
     */
    public testConfig: ConfigTestConnection = new ConfigTestConnection(),
    /**
     * Holds powerbot test-server connection-configuration
     */
    public viewConfig: ConfigView[] = [],
    /**
     * Holds values related to api-key generation
     * - only exist if set from environment file
     */
    public authConfig?: ConfigAuth,
    /**
     * Holds values related to web-application debugging
     * only available when application is run in debug mode
     * configured in environment file
     */
    public debugConfig?: ConfigDebug,
  ) {}
}

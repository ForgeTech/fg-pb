import {
  ConfigLoggingConnection,
  ConfigMarketConnection,
  ConfigProductionConnection,
  ConfigTestConnection
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
    * Flag indicating dark-theme mode
    */
    public darkTheme: boolean = false,
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
    public testConfig: ConfigTestConnection = new ConfigTestConnection()
  ) {}
}

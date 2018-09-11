/**
 * ConfigGenerateApiKey -
 * Entity-Class used to hold configuration
 * for PowerBot api-key generation
 */
export class ConfigGenerateApiKey {
  /**
   * Constructor
   */
  constructor(
    /**
     * The name of the api-key to generate
     */
    public api_key_name: string = '',
    /**
     * Password for accessing robocomp
     */
    public pwd_robocomp: string = '',
     /**
     * Password for accessing epex
     */
    public pwd_epex: string = '',
     /**
     * Enable api-key for trade-service
     */
    public can_trade: boolean = false,
     /**
     * Enable api-key for signal-service
     */
    public can_signal: boolean = false,
     /**
     * Enable api-key for PowerBot production-server
     */
    public allow_production: boolean = false,
     /**
     * Enable api-key for PowerBot test-server
     */
    public allow_test: boolean = false,
  ) {}
}

/**
 * ConfigProductionConnection -
 * Entity-Class used to hold configuration
 * for PowerBot production-server connection
 */
export class ConfigProductionConnection {
  /**
   * Constructor
   */
  constructor(
    /**
     * The api-key used with the production-server connection
     * CAUTION! Must be allowed for production-environmet
     */
    public api_key: string = '',
    /**
     * The url-address of the PowerBot production-server
     */
    public api_server_url: string = '',
    /**
     * The url-address of the PowerBot backup-server
     */
    public backup_server_url: string = '',
    /**
     * Flag signaling if it's allowed to
     * store the connection configuration
     * on client
     */
    public cache_connection: boolean = true,
  ) {}
}

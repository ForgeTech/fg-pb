/**
 * ConfigTestConnection -
 * Entity-Class used to hold configuration
 * for PowerBot test-server connection
 */
export class ConfigTestConnection {
  /**
   * Constructor
   */
  constructor(
    /**
     * The api-key used with the test-server connection
     * CAUTION! Must be allowed for test-environmet
     */
    public api_key: string = '',
    /**
     * The url-address of the PowerBot test-server
     */
    public api_server_url: string = '',
    /**
     * Flag signaling if it's allowed to
     * store the connection configuration
     * on client
     */
    public cache_connection: boolean = true,
  ) {}
}

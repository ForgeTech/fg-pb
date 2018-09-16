import { PbAppEntityConst } from './../app.const';
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
    public apiKey: string = '',
    /**
     * The url-address of the PowerBot test-server
     */
    public serverUrl: string = '', // PbAppEntityConst.SERVER_URL_NOT_SET,
    /**
     * Flag signaling if it's allowed to
     * store the connection configuration
     * on client
     */
    public store: boolean = false,
  ) {}
}

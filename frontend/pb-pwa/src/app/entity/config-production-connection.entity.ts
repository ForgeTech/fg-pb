import { PbAppEntityConst } from './../app.const';
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
    public apiKey: string = '',
    /**
     * The url-address of the PowerBot production-server
     */
    public serverUrl: string = '', // PbAppEntityConst.SERVER_URL_NOT_SET,
    /**
     * The url-address of the PowerBot backup-server
     */
    public backupUrl: string = '', // PbAppEntityConst.SERVER_URL_NOT_SET,
    /**
     * Flag signaling if it's allowed to
     * store the connection configuration
     * on client
     */
    public store: boolean = false,
  ) {}
}

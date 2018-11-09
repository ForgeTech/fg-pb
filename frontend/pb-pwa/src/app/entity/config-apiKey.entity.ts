import { PbAppEntityConst } from '../app.const';
/**
 * ConfigLoggingConnection -
 * Entity-Class used to hold configuration
 * connection to PowerBot logging-service
 */
export class ConfigApiKey {
  /**
   * Constructor
   */
  constructor(
    /**
     * Url to remote logging server
     */
    public masterPwd: string = '',
    /**
     * Log-Level to be used with remote debugging server
     */
    public epexPass: string = '',
    /**
     * Url to remote vorlon debugging server
     */
    public name: string = '',
    /**
     * Flag if key can trade
     */
    public canTrade: boolean = false,
    /**
     * Flag if key can signal
     */
    public canSignal: boolean = false,
    /**
     * Flag if key is generated for production environment
     */
    public envProd: boolean = false
  ) {}
}

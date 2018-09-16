import { PbAppEntityConst } from './../app.const';
/**
 * ConfigLoggingConnection -
 * Entity-Class used to hold configuration
 * connection to PowerBot logging-service
 */
export class ConfigLoggingConnection {
  /**
   * Constructor
   */
  constructor(
    /**
     * Url to remote logging server
     */
    public logUrl: string = PbAppEntityConst.NOT_SET,
    /**
     * Log-Level to be used with remote debugging server
     */
    public logLevel: string = '',
    /**
     * Url to remote vorlon debugging server
     */
    public debugUrl: string = PbAppEntityConst.NOT_SET,
    /**
     * Flag signaling if it's allowed to
     * store the connection configuration
     * on client
     */
    public store: boolean = false
  ) {}
}

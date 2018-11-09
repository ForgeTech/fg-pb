import { PbAppEntityConst } from '../app.const';
/**
 * ConfigLogging -
 * Entity-Class used to hold configuration
 * connection to PowerBot logging-service
 */
export class ConfigLogging {
  /**
   * Constructor
   */
  constructor(
    /**
     * Url to remote logging server
     */
    public logFolder: string = '',
    /**
     * Log-Level to be used with remote debugging server
     */
    public logLevel: string = '',
    /**
     * Flag signaling if it's allowed to
     * store the connection configuration
     * on client
     */
    public cache: boolean = false,
    /**
     * Flags the configuration as valid/invalid
     */
    public isValid: boolean = false,
  ) {}
}

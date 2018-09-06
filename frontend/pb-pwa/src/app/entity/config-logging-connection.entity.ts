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
    public remote_logging_url: string = '',
    /**
     * Log-Level to be used with remote debugging server
     */
    public remote_logging_level: string = '',
    /**
     * Url to remote vorlon debugging server
     */
    public vorlon_debug_server_url: string = ''
  ) {}
}

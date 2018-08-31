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
     * Directory used to store
     * logging files
     */
    public logging_dir: string = ''
  ) {}
}

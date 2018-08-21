/**
 * ConfigMarketConnection -
 * Entity-Class used to hold configuration
 * for connecting to markes-service
 */
export class ConfigMarketConnection {
  /**
   * Constructor
   */
  constructor(
    /**
    * Password for accessing epex
    */
    public pwd_epex: string = '',
  ) {}
}

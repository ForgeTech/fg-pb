import { ConfigCommon } from './entity.export';
/**
 * ConfigBreakPoint -
 * Entity-Class used to hold configuration-data
 * specific to certain BreakPoints
 */
export class ConfigBreakPoint {
  /**
   * Constructor
   */
  constructor(
    /**
     * The name/identifier of the breakpoint
     */
    public name: string,
    /**
     * The media-query to match for this breakpoint
     */
    public mediaQuery: string = '',
    /**
     * A set of common view-configuration, that will be used as default
     * values, that can be overwritten with breakpoint specific configuration
     */
    public common: ConfigCommon = new ConfigCommon(),
  ) { }
}

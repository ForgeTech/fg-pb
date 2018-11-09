import { ConfigMetaData, ConfigBreakPoint } from './entity.export';
/**
 * ConfigView -
 * Entity-Class used to hold configuration-data
 * for a powerbot view
 */
export class ConfigView {
  /**
   * Constructor
   */
  constructor(
    /**
     * The name/identifier of the view
     */
    public name: string = '',
    /**
     * Reference to a views meta-data configuration
     */
    public meta: ConfigMetaData = new ConfigMetaData(),
    /**
     * Contains sets of configuration that should be applied for specific
     * breakpoints
     */
    public breakpoints: ConfigBreakPoint[] = []
  ) {}
}

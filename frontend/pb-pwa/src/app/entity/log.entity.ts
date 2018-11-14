import { LogEntityInterface } from '../interface/interface.export';

/**
 * Log -
 * Entity-Class used to hold
 * log-message data
 */
export class LogEntity implements LogEntityInterface {
  /**
   * Constructor
   */
  constructor(
    /**
     * The content of your log entry
     */
    public text: string,
    /**
     * Should be set to the time (UTC) when the log entry was emitted by your system
     */
    public as_of: Date,
    /**
      * The unique id of the log entry
      */
    public id?: string,
    /**
     * The timestamp when the powerbot trading API has received the log entry. UTC timezone is used.
     */
    public received?: Date,
    /**
     * An optional category of the log entry
     */
    public category?: string,
    /**
     * The severity of the log entry
     */
    public severity?: LogEntityInterface.SeverityEnum,
  ) {}
}

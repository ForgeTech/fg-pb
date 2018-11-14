import { MarketEntityInterface } from '../interface/interface.export';

/**
 * Market -
 * Entity-Class used to hold
 * market data
 */
export class MarketEntity implements MarketEntityInterface {
  /** Constructor */
  constructor(
    /**
     * The current state of the market * OK Everyhting's ok,
     *  trading is possible * WARNING Trading might not be possible,
     *  check the messages. * FAILURE Trading is not possible right now.
     */
    public status: MarketEntityInterface.StatusEnum,
    /**
     * The timestamp when the status of the market was last checked.
     */
    public api_timestamp?: Date,
    public options?: any,
    /**
     * The urls of EPEX's backand system Powerbot is connected to
     */
    public urls?: Array<string>,
    /**
     * EPEX products which powerbot is linked with
     */
    public products?: Array<string>,
    /**
     * The market powerbot is configured to operate in
     */
    public market_area_id?: string,
    /**
     * The delivery areay powerbot is configured to operate in
     */
    public delivery_area_id?: string,
    /**
     * The current session id
     */
    public session_id?: number,
    /**
     * The timstamp (UTC) since when Powerbot has logged-into the backend system
     */
    public logged_in_Since?: Date,
    /**
     * The timestamp when the last heartbeat of the backend system has been received (should be not older than 5 seconds)
     */
    public heartbeat_as_of?: Date,
    /**
     * The content of the last heartbeat
     */
    public heartbeat_content?: string,
    /**
     * Messages explaining the state of the market
     */
    public messages?: Array<string>,

  ) {}
}

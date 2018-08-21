import { MarketStatus as MarketInterface, InlineResponse20012Options } from '../module/pb-api';
/**
 * Market -
 * Entity-Class used to hold
 * market data
 */
export class Market implements MarketInterface {
  /** Constructor */
  constructor(
    /**
     * The current state of the market * OK Everyhting's ok,
     *  trading is possible * WARNING Trading might not be possible,
     *  check the messages. * FAILURE Trading is not possible right now.
     */
    public status: MarketInterface.StatusEnum,
    /**
     * The timestamp when the status of the market was last checked.
     */
    public apiTimestamp?: Date,
    public options?: InlineResponse20012Options,
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
    public marketAreaId?: string,
    /**
     * The delivery areay powerbot is configured to operate in
     */
    public deliveryAreaId?: string,
    /**
     * The current session id
     */
    public sessionId?: number,
    /**
     * The timstamp (UTC) since when Powerbot has logged-into the backend system
     */
    public loggedInSince?: Date,
    /**
     * The timestamp when the last heartbeat of the backend system has been received (should be not older than 5 seconds)
     */
    public heartbeatAsOf?: Date,
    /**
     * The content of the last heartbeat
     */
    public heartbeatContent?: string,
    /**
     * Messages explaining the state of the market
     */
    public messages?: Array<string>,

  ) {}
}

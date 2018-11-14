export interface MarketEntityInterface {
    /**
     * The timestamp when the status of the market was last checked.
     */
    api_timestamp?: Date;
    /**
     * The current state of the market
     * OK Everyhting's ok, trading is possible
     * WARNING Trading might not be possible, check the messages.
     * FAILURE Trading is not possible right now.
     */
    status: MarketEntityInterface.StatusEnum;
    options?: any;
    /**
     * The urls of EPEX's backand system Powerbot is connected to
     */
    urls?: Array<string>;
    /**
     * EPEX products which powerbot is linked with
     */
    products?: Array<string>;
    /**
     * The market powerbot is configured to operate in
     */
    market_area_id?: string;
    /**
     * The delivery areay powerbot is configured to operate in
     */
    delivery_area_id?: string;
    /**
     * The available delivery areas
     */
    available_delivery_area_ids?: Array<string>;
    /**
     * The current session id
     */
    session_id?: number;
    /**
     * The timstamp (UTC) since when Powerbot has logged-into the backend system
     */
    logged_in_since?: Date;
    /**
     * The timestamp when the last heartbeat of the backend system has been received (should be not older than 5 seconds)
     */
    heartbeat_as_of?: Date;
    /**
     * The content of the last heartbeat
     */
    heartbeat_content?: string;
    /**
     * Messages explaining the state of the market
     */
    messages?: Array<string>;
}
export namespace MarketEntityInterface {
    export type StatusEnum = 'OK' | 'WARNING' | 'FAILURE';
    export const StatusEnum = {
        OK: 'OK' as StatusEnum,
        WARNING: 'WARNING' as StatusEnum,
        FAILURE: 'FAILURE' as StatusEnum
    };
}

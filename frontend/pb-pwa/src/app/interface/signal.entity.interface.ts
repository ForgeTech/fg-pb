export interface SignalEntityInterface {
    /**
     * The unique id of the signal (within the namespace of the emitting source)
     */
    id?: string;
    /**
     * The identifier of the system which emitted the signal
     */
    source?: string;
    /**
     * The timestamp when the signal was received by PowerBot
     */
    received_at?: Date;
    /**
     * The number of times the signal has been updated. If the signal has never received any updates, then revision is 0.
     */
    revision?: number;
    /**
     * Together with delivery_start and delivery_end specify the delivery period in which the signal is valid
     */
    delivery_start?: Date;
    /**
     * Together with delivery_start and delivery_end specify the delivery period in which the signal is valid
     */
    delivery_end?: Date;
    /**
     * The content of the signal
     */
    value?: any;
}

import { SignalInterface } from '../module/pb-api/model/interfaces.export';
/**
 * Signal -
 * Entity-Class used to hold
 * signal data
 */
export class SignalEntity implements SignalInterface {
  /** Constructor */
  constructor(
    /**
   * The unique id of the signal (within the namespace of the emitting source)
   */
    public id?: string,
    /**
     * The identifier of the system which emitted the signal
     */
    public source?: string,
    /**
     * The timestamp when the signal was received by PowerBot
     */
    public receivedAt?: Date,
    /**
     * The number of times the signal has been updated. If the signal has never received any updates, then revision is 0.
     */
    public revision?: number,
    /**
     * Together with delivery_start and delivery_end specify the delivery period in which the signal is valid
     */
    public deliveryStart?: Date,
    /**
     * Together with delivery_start and delivery_end specify the delivery period in which the signal is valid
     */
    public deliveryEnd?: Date,
    /**
     * The content of the signal
     */
    public value?: any,
  ) {}
}

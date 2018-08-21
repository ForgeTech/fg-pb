import { Message as MessageInterface } from '../module/pb-api';

/**
 * Message -
 * Entity-Class used to hold
 * message data
 */
export class Message implements MessageInterface {
  /**
   * Constructor
   */
  constructor(
    public messageId?: string,
    public apiTimestamp?: Date,
    public category?: MessageInterface.CategoryEnum,
    public messageClass?: string,
    public contentType?: string,
    public correlationId?: string,
    public direction?: MessageInterface.DirectionEnum,
    public groupId?: string,
    public groupSequence?: string,
    public content?: any,
  ) {}
}

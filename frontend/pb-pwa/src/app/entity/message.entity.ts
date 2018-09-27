import { MessageInterface } from '../module/pb-api/model/interfaces.export';

/**
 * Message -
 * Entity-Class used to hold
 * message data
 */
export class MessageEntity implements MessageInterface {
  /**
   * Constructor
   */
  constructor(
    public message_id?: string,
    public api_timestamp?: Date,
    public category?: MessageInterface.CategoryEnum,
    public message_class?: string,
    public content_type?: string,
    public correlation_id?: string,
    public direction?: MessageInterface.DirectionEnum,
    public group_id?: string,
    public group_sequence?: string,
    public content?: any,
  ) {}
}

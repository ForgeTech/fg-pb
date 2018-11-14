import { MessageEntityInterface } from '../interface/interface.export';

/**
 * Message -
 * Entity-Class used to hold
 * message data
 */
export class MessageEntity implements MessageEntityInterface {
  /**
   * Constructor
   */
  constructor(
    public message_id?: string,
    public api_timestamp?: Date,
    public category?: MessageEntityInterface.CategoryEnum,
    public message_class?: string,
    public content_type?: string,
    public correlation_id?: string,
    public direction?: MessageEntityInterface.DirectionEnum,
    public group_id?: string,
    public group_sequence?: string,
    public content?: any,
  ) {}
}

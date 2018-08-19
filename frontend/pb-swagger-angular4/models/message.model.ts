
export enum Category {
  INQUIRY_REQUEST = 'INQUIRY_REQUEST',
  MANAGEMENT_REQUEST = 'MANAGEMENT_REQUEST',
  RESPONSE = 'RESPONSE',
  BROADCAST = 'BROADCAST'
}

export enum Direction {
  IN = 'IN',
  OUT = 'OUT'
}

export interface Message {
  message_id: string;
  api_timestamp: string;
  category: Category;
  message_class: string;
  content_type: string;
  correlation_id: string;
  direction: Direction;
  group_id: string;
  group_sequence: string;
  content: any;
}

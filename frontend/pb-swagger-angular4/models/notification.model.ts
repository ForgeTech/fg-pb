
export enum Type {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export interface Notification {
  msg_id: number;
  type: Type;
  code: number;
  epex_timestamp: string;
  api_timestamp: string;
  text: string;
  severity: string;
}

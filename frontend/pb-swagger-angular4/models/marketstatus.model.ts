
export enum Status {
  OK = 'OK',
  WARNING = 'WARNING',
  FAILURE = 'FAILURE'
}

export interface MarketStatus {
  api_timestamp: string;
  status: Status;
  options: any;
  urls: string[];
  products: string[];
  market_area_id: string;
  delivery_area_id: string;
  session_id: number;
  logged_in_since: string;
  heartbeat_as_of: string;
  heartbeat_content: string;
  messages: string[];
}

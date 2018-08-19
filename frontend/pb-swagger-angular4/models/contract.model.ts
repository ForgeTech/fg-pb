
export enum State {
  ACTI = 'ACTI',
  IACT = 'IACT'
}

export interface Contract {
  product: string;
  contract_id: number;
  state: State;
  name: string;
  revision_no: number;
  delivery_start: string;
  delivery_end: string;
  best_bid_price: number;
  best_bid_quantity: number;
  best_ask_price: number;
  best_ask_quantity: number;
  last_price: number;
  last_quantity: number;
  total_quantity: number;
  auction_price: number;
  high: number;
  low: number;
  contract_details: any;
  orderbook_details: any;
  relative_position: number;
  absolute_position: number;
  last_trade_time: string;
  signals: any[];
}

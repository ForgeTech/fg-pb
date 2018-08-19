
export enum State {
  ACTI = 'ACTI',
  HIBE = 'HIBE',
  IACT = 'IACT'
}

export enum Side {
  SELL = 'SELL',
  BUY = 'BUY'
}

export interface OwnOrder {
  order_id: number;
  api_timestamp: string;
  state: State;
  delivery_area: string;
  last_change_timestamp: string;
  buy: boolean;
  sell: boolean;
  side: Side;
  contract_id: number;
  contract_name: string;
  delivery_start: string;
  delivery_end: string;
  clOrdrId: string;
  txt: string;
  price: number;
  quantity: number;
  action: string;
  details: any;
}

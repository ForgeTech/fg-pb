
export enum State {
  CNCL = 'CNCL',
  RREJ = 'RREJ',
  RGRA = 'RGRA',
  RREQ = 'RREQ',
  ACTI = 'ACTI',
  CREQ = 'CREQ',
  CREJ = 'CREJ',
  RSFA = 'RSFA'
}

export enum Buy_aggressor_indicator {
  Y = 'Y',
  N = 'N',
  U = 'U'
}

export enum Sell_aggressor_indicator {
  Y = 'Y',
  N = 'N',
  U = 'U'
}

export interface Trade {
  trade_id: number;
  state: State;
  delivery_area: string;
  api_timestamp: string;
  exec_time: string;
  buy: boolean;
  sell: boolean;
  buy_order_id: number;
  buy_delivery_area: string;
  buy_clOrderId: string;
  buy_txt: string;
  buy_user_code: string;
  buy_member_id: string;
  buy_aggressor_indicator: Buy_aggressor_indicator;
  sell_order_id: number;
  sell_delivery_area: string;
  sell_clOrderId: string;
  sell_txt: string;
  sell_user_code: string;
  sell_member_id: string;
  sell_aggressor_indicator: Sell_aggressor_indicator;
  contract_id: number;
  contract_name: string;
  delivery_start: string;
  delivery_end: string;
  price: number;
  quantity: number;
  trade_details: any;
  contract_details: any;
}


export interface ContractHistoryItem {
  as_of: string;
  revisionNo: number;
  vwap: number;
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
  signals: any[];
  trades: any[];
}

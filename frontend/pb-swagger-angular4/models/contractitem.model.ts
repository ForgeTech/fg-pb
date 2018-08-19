
export interface ContractItem {
  product: string;
  contract_id: number;
  revision_no: number;
  state: string;
  name: string;
  delivery_start: string;
  delivery_end: string;
  contract_details: any;
  relative_position: number;
  absolute_position: number;
  signals: any[];
}

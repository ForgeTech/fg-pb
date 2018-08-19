
export interface Signal {
  id: string;
  source: string;
  received_at: string;
  revision: number;
  delivery_start: string;
  delivery_end: string;
  value: any;
}

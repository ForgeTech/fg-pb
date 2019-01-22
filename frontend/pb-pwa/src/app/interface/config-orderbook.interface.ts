export interface ConfigOrderbookInterface {
  product: string;
  withBidOrAskOnly?: boolean;
  contractId?: number;
  contractName?: string;
  deliveryStart?: Date;
  deliveryEnd?: Date;
  deliveryWithin?: Date;
  pastHours?: number;
  deliveryArea?: string;
  withDetails?: boolean;
  limit?: number;
}

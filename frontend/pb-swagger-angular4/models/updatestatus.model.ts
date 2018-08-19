
export enum OrderModType {
  ACTI = 'ACTI',
  DEAC = 'DEAC',
  DELE = 'DELE'
}

export interface UpdateStatus {
  orderModType: OrderModType;
  inclPreArranged: boolean;
  prodName: string[];
}

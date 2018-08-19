
export enum Side {
  SELL = 'SELL',
  BUY = 'BUY'
}

export enum OrdrExeRestriction {
  FOK = 'FOK',
  IOC = 'IOC',
  NON = 'NON',
  AON = 'AON',
  AU = 'AU'
}

export enum Type {
  B = 'B',
  O = 'O',
  I = 'I',
  L = 'L',
  S = 'S',
  H = 'H',
  C = 'C',
  N = 'N',
  E = 'E'
}

export enum ValidityRes {
  GFS = 'GFS',
  GTD = 'GTD',
  NON = 'NON'
}

export enum State {
  ACTI = 'ACTI',
  HIBE = 'HIBE'
}

export interface OrderEntry {
  delivery_area: string;
  side: Side;
  prod: string;
  quantity: number;
  price: number;
  displayQty: number;
  contractId: number;
  contractName: string;
  clOrdrId: string;
  clearingAcctType: string;
  ordrExeRestriction: OrdrExeRestriction;
  preArranged: boolean;
  preArrangedAcct: string;
  type: Type;
  validityRes: ValidityRes;
  state: State;
  validityDate: string;
  txt: string;
  ppd: number;
  dlvryStart: string;
  dlvryEnd: string;
}

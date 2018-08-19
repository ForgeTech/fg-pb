
export enum Action {
  ACTI = 'ACTI',
  DEAC = 'DEAC',
  MODI = 'MODI',
  DELE = 'DELE'
}

export enum ValidityRes {
  GFS = 'GFS',
  GTD = 'GTD',
  NON = 'NON'
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

export enum OrdrExeRestriction {
  FOK = 'FOK',
  IOC = 'IOC',
  NON = 'NON',
  AON = 'AON',
  AU = 'AU'
}

export interface OrderModify {
  action: Action;
  validityRes: ValidityRes;
  validityDate: string;
  type: Type;
  txt: string;
  ordrExeRestriction: OrdrExeRestriction;
  quantity: number;
  displayQty: number;
  price: number;
  clOrdrId: string;
  ppd: number;
}

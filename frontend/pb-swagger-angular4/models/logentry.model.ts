
export enum Severity {
  LOW = 'LOW',
  MED = 'MED',
  HIG = 'HIG',
  ERR = 'ERR',
  URG = 'URG'
}

export interface LogEntry {
  id: string;
  received: string;
  text: string;
  as_of: string;
  category: string;
  severity: Severity;
}

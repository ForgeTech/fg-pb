
export enum Status {
  OK = 'OK',
  ERROR = 'ERROR'
}

export interface BulkSignalResponse {
  id: string;
  source: string;
  status: Status;
  status_text: string;
}

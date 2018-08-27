export interface fgGlobal {
  isBrowser: boolean;
}

export abstract class GlobalRef {
  abstract get nativeGlobal(): any;
}

export class NodeGlobalRef extends GlobalRef {
  // USE @ts-ignore TO FIX TS2304: Cannot find name 'global'. error
  // READ: https://stackoverflow.com/questions/37355244/ignore-cannot-find-module-error-on-typescript
  // @ts-ignore
  get nativeGlobal(): any { return global as any; }
}

export class BrowserGlobalRef extends GlobalRef {
  // USE @ts-ignore TO FIX TS2304: Cannot find name 'window'. error
  // READ: https://stackoverflow.com/questions/37355244/ignore-cannot-find-module-error-on-typescript
  // @ts-ignore
  get nativeGlobal(): any { return window as any; }
}


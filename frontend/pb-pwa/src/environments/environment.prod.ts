// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'Production',
  debug: false,
  production: true,
  override: true,
  // Use Powerbot variable to preset application-data
  // for development environment
  powerbot: {
    id: 0,
    __typename: 'PowerBot',
    state: {
      id: 0,
      __typename: 'State',
      allowed: false,
      connection: false,
      connectionState: 0,
      requestState: 0
    },
    config: {
      id: 0,
      __typename: 'Config',
      languages: [
        'en'
      ],
      lang: 'en',
      backHours: 3,
      darkTheme: true,
      logConfig: {
        id: 0,
        __typename: 'ConfigLogging',
        logFolder: 'test',
        logLevel: 1,
        cache: true,
        isValid: true
      },
      prodConfig: {
        id: 0,
        __typename: 'ConfigConnection',
        isProduction: true,
        serverUrl: 'https://playground.powerbot-trading.com/api/error',
        backupUrl: 'https://playground.powerbot-trading.com/api/v0',
        apiKey: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b',
        cache: true,
        isValid: false
      },
      testConfig: {
        id: 1,
        __typename: 'ConfigConnection',
        isProduction: false,
        serverUrl: 'https://playground.powerbot-trading.com/api/v0',
        backupUrl: false,
        apiKey: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b',
        cache: true,
        isValid: true
      },
      viewConfig: [
        {
          id: 0,
          __typename: 'ConfigView',
          name: 'dashboard',
          breakpoints: [
            {
              id: 0,
              __typename: 'ConfigBreakPoint',
              name: 'small',
              grid: {
                id: 0,
                __typename: 'ConfigGrid',
                cols: 32,
                rowHeight: '25px',
                gutterSize: '10px'
              },
              cards: [
                {
                  id: 1,
                  __typename: 'ConfigCard',
                  title: 'component_label_orders',
                  template: 'orders',
                  cols: 16, rows: 7
                },
                {
                  id: 2,
                  __typename: 'ConfigCard',
                  title: 'component_label_trades',
                  template: 'trades',
                  cols: 16, rows: 7
                },
                {
                  id: 3,
                  __typename: 'ConfigCard',
                  title: 'component_label_orderbook',
                  template: 'orderbook',
                  cols: 24, rows: 14
                },
                {
                  id: 4,
                  __typename: 'ConfigCard',
                  title: 'component_label_bids',
                  template: 'bids',
                  cols: 8, rows: 7
                },
                {
                  id: 5,
                  __typename: 'ConfigCard',
                  title: 'component_label_asks',
                  template: 'asks',
                  cols: 8, rows: 7
                },
                {
                  id: 6,
                  __typename: 'ConfigCard',
                  title: 'component_label_portfolio',
                  template: 'portfolio',
                  cols: 16, rows: 7
                },
                {
                  id: 7,
                  __typename: 'ConfigCard',
                  title: 'component_label_contract_details',
                  template: 'contractdetails',
                  cols: 16, rows: 7
                },
                {
                  id: 8,
                  __typename: 'ConfigCard',
                  title: 'component_label_product_history',
                  template: 'producthistory',
                  cols: 16, rows: 7
                },
                {
                  id: 9,
                  __typename: 'ConfigCard',
                  title: 'component_label_signals',
                  template: 'signals',
                  cols: 16, rows: 7
                },
                {
                  id: 10,
                  __typename: 'ConfigCard',
                  title: 'component_label_logs',
                  template: 'logs',
                  cols: 16, rows: 7
                },
                {
                  id: 11,
                  __typename: 'ConfigCard',
                  title: 'component_label_signal_history',
                  template: 'signalhistory',
                  cols: 16, rows: 7
                },
              ]
            },
            {
              id: 1,
              __typename: 'ConfigBreakPoint',
              name: 'large',
              grid: {
                id: 1,
                __typename: 'ConfigGrid',
                cols: 32,
                rowHeight: '25px',
                gutterSize: '10px'
              },
              cards: [
                {
                  id: 12,
                  __typename: 'ConfigCard',
                  title: 'component_label_orders',
                  template: 'orders',
                  cols: 7, rows: 7
                },
                {
                  id: 13,
                  __typename: 'ConfigCard',
                  title: 'component_label_orderbook',
                  template: 'orderbook',
                  cols: 14, rows: 14
                },
                {
                  id: 14,
                  __typename: 'ConfigCard',
                  title: 'component_label_contract_details',
                  template: 'contractdetails',
                  cols: 7, rows: 7
                },
                {
                  id: 15,
                  __typename: 'ConfigCard',
                  title: 'component_label_bids',
                  template: 'bids',
                  cols: 4, rows: 7
                },
                {
                  id: 16,
                  __typename: 'ConfigCard',
                  title: 'component_label_trades',
                  template: 'trades',
                  cols: 7, rows: 7
                },
                {
                  id: 17,
                  __typename: 'ConfigCard',
                  title: 'component_label_signals',
                  template: 'signals',
                  cols: 7, rows: 7
                },
                {
                  id: 18,
                  __typename: 'ConfigCard',
                  title: 'component_label_asks',
                  template: 'asks',
                  cols: 4, rows: 7
                },
                {
                  id: 19,
                  __typename: 'ConfigCard',
                  title: 'component_label_portfolio',
                  template: 'portfolio',
                  cols: 7, rows: 7
                },
                {
                  id: 20,
                  __typename: 'ConfigCard',
                  title: 'component_label_product_history',
                  template: 'producthistory',
                  cols: 14, rows: 14
                },
                {
                  id: 21,
                  __typename: 'ConfigCard',
                  title: 'component_label_signal_history',
                  template: 'signalhistory',
                  cols: 11, rows: 14
                },
                {
                  id: 22,
                  __typename: 'ConfigCard',
                  title: 'component_label_logs',
                  template: 'logs',
                  cols: 7, rows: 7
                },
              ]
            }
          ]
        }
      ]
    }
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

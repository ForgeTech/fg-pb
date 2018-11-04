// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'Development',
  debug: true,
  production: true,
  override: true,
  // Use Powerbot variable to preset application-data
  // for development environment
  powerbot: {
    __typename: 'powerbot',
    config: {
      __typename: 'config',
      languages: ['en'],
      lang: 'en',
      backHours: 3,
      darkTheme: true,
      prodConfig: {
        __typename: 'prod',
        serverUrl: 'https://playground.powerbot-trading.com/api/error',
        backupUrl: 'https://playground.powerbot-trading.com/api/v0',
        apiKey: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b',
        cache: true
      },
      testConfig: {
        __typename: 'test',
        serverUrl: 'https://playground.powerbot-trading.com/api/v0',
        apiKey: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b',
        cache: false
      },
      views: [
        {
          __typename: 'view',
          name: 'dashboard',
          breakpoints: [
            {
              __typename: 'breakpoint',
              name: 'small',
              grid: {
                __typename: 'grid',
                cols: 32,
                rowHeight: '25px',
                gutterSize: '10px'
              },
              cards: [
                {
                  __typename: 'card',
                  title: 'component_label_orders',
                  template: 'orders',
                  cols: 16, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_trades',
                  template: 'trades',
                  cols: 16, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_orderbook',
                  template: 'orderbook',
                  cols: 24, rows: 14
                },
                {
                  __typename: 'card',
                  title: 'component_label_bids',
                  template: 'bids',
                  cols: 8, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_asks',
                  template: 'asks',
                  cols: 8, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_portfolio',
                  template: 'portfolio',
                  cols: 16, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_contract_details',
                  template: 'contractdetails',
                  cols: 16, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_product_history',
                  template: 'producthistory',
                  cols: 16, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_signals',
                  template: 'signals',
                  cols: 16, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_logs',
                  template: 'logs',
                  cols: 16, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_signal_history',
                  template: 'signalhistory',
                  cols: 16, rows: 7
                },
              ]
            },
            {
              __typename: 'breakpoint',
              name: 'large',
              grid: {
                __typename: 'grid',
                cols: 32,
                rowHeight: '25px',
                gutterSize: '10px'
              },
              cards: [
                {
                  __typename: 'card',
                  title: 'component_label_orders',
                  template: 'orders',
                  cols: 7, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_orderbook',
                  template: 'orderbook',
                  cols: 14, rows: 14
                },
                {
                  __typename: 'card',
                  title: 'component_label_contract_details',
                  template: 'contractdetails',
                  cols: 7, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_bids',
                  template: 'bids',
                  cols: 4, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_trades',
                  template: 'trades',
                  cols: 7, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_signals',
                  template: 'signals',
                  cols: 7, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_asks',
                  template: 'asks',
                  cols: 4, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_portfolio',
                  template: 'portfolio',
                  cols: 7, rows: 7
                },
                {
                  __typename: 'card',
                  title: 'component_label_product_history',
                  template: 'producthistory',
                  cols: 14, rows: 14
                },
                {
                  __typename: 'card',
                  title: 'component_label_signal_history',
                  template: 'signalhistory',
                  cols: 11, rows: 14
                },
                {
                  __typename: 'card',
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

import { BreakpointEnum } from 'src/app/module/fg-material/enum/enum.export';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'Development',
  debug: true,
  production: false,
  override: true,
  // Use Powerbot variable to preset application-data
  // for development environment
  powerbot: {
    id: 0,
    __typename: 'PowerBot',
    states: [
      {
        id: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b',
        __typename: 'State',
        darkTheme: true,
        backHours: 3,
        allowed: false,
        connection: false,
        connectionState: 0,
        requestState: 0,
      }
    ],
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
      view: [
        {
          id: 0,
          __typename: 'View',
          name: 'dashboard',
          breakpoints: [
            {
              id: 0,
              __typename: 'Breakpoint',
              name: 'Small',
              validFor: [
                BreakpointEnum[ BreakpointEnum.HANDSET_PORTRAIT ],
              ],
              grid: {
                id: 0,
                __typename: 'Grid',
                cols: 32,
                rowHeight: '20px',
                gutterSize: '5px'
              },
              cards: [
                {
                  id: 1,
                  __typename: 'Card',
                  title: 'component_label_orders',
                  template: 'orders',
                  cols: 32, rows: 7
                },
                {
                  id: 2,
                  __typename: 'Card',
                  title: 'component_label_trades',
                  template: 'trades',
                  cols: 32, rows: 7
                },
                {
                  id: 3,
                  __typename: 'Card',
                  title: 'component_label_orderbook',
                  template: 'orderbook',
                  cols: 32, rows: 14
                },
                {
                  id: 4,
                  __typename: 'Card',
                  title: 'component_label_bids',
                  template: 'bids',
                  cols: 16, rows: 7
                },
                {
                  id: 5,
                  __typename: 'Card',
                  title: 'component_label_asks',
                  template: 'asks',
                  cols: 16, rows: 7
                },
                {
                  id: 6,
                  __typename: 'Card',
                  title: 'component_label_portfolio',
                  template: 'portfolio',
                  cols: 16, rows: 7
                },
                {
                  id: 7,
                  __typename: 'Card',
                  title: 'component_label_contract_details',
                  template: 'contractdetails',
                  cols: 32, rows: 7
                },
                {
                  id: 8,
                  __typename: 'Card',
                  title: 'component_label_product_history',
                  template: 'producthistory',
                  cols: 32, rows: 7
                },
                {
                  id: 9,
                  __typename: 'Card',
                  title: 'component_label_signals',
                  template: 'signals',
                  cols: 32, rows: 7
                },
                {
                  id: 10,
                  __typename: 'Card',
                  title: 'component_label_logs',
                  template: 'logs',
                  cols: 32, rows: 7
                },
                {
                  id: 11,
                  __typename: 'Card',
                  title: 'component_label_signal_history',
                  template: 'signalhistory',
                  cols: 32, rows: 7
                },
              ]
            },
            {
              id: 1,
              __typename: 'Breakpoint',
              name: 'Medium',
              validFor: [
                BreakpointEnum[ BreakpointEnum.HANDSET_LANDSCAPE ],
                BreakpointEnum[ BreakpointEnum.SMALL ],
                BreakpointEnum[ BreakpointEnum.MEDIUM ],
              ],
              grid: {
                id: 20,
                __typename: 'Grid',
                cols: 32,
                rowHeight: '25px',
                gutterSize: '10px'
              },
              cards: [
                {
                  id: 21,
                  __typename: 'Card',
                  title: 'component_label_orders',
                  template: 'orders',
                  cols: 16, rows: 7
                },
                {
                  id: 22,
                  __typename: 'Card',
                  title: 'component_label_trades',
                  template: 'trades',
                  cols: 16, rows: 7
                },
                {
                  id: 23,
                  __typename: 'Card',
                  title: 'component_label_orderbook',
                  template: 'orderbook',
                  cols: 24, rows: 14
                },
                {
                  id: 24,
                  __typename: 'Card',
                  title: 'component_label_bids',
                  template: 'bids',
                  cols: 8, rows: 7
                },
                {
                  id: 25,
                  __typename: 'Card',
                  title: 'component_label_asks',
                  template: 'asks',
                  cols: 8, rows: 7
                },
                {
                  id: 26,
                  __typename: 'Card',
                  title: 'component_label_portfolio',
                  template: 'portfolio',
                  cols: 16, rows: 7
                },
                {
                  id: 27,
                  __typename: 'Card',
                  title: 'component_label_contract_details',
                  template: 'contractdetails',
                  cols: 16, rows: 7
                },
                {
                  id: 28,
                  __typename: 'Card',
                  title: 'component_label_product_history',
                  template: 'producthistory',
                  cols: 16, rows: 7
                },
                {
                  id: 29,
                  __typename: 'Card',
                  title: 'component_label_signals',
                  template: 'signals',
                  cols: 16, rows: 7
                },
                {
                  id: 210,
                  __typename: 'Card',
                  title: 'component_label_logs',
                  template: 'logs',
                  cols: 16, rows: 7
                },
                {
                  id: 211,
                  __typename: 'Card',
                  title: 'component_label_signal_history',
                  template: 'signalhistory',
                  cols: 16, rows: 7
                },
              ]
            },
            {
              id: 2,
              __typename: 'Breakpoint',
              name: 'Default',
              validFor: [
                BreakpointEnum[ BreakpointEnum.LARGE ]
              ],
              grid: {
                id: 31,
                __typename: 'Grid',
                cols: 32,
                rowHeight: '25px',
                gutterSize: '10px'
              },
              cards: [
                {
                  id: 32,
                  __typename: 'Card',
                  title: 'component_label_orders',
                  template: 'orders',
                  cols: 7, rows: 7
                },
                {
                  id: 33,
                  __typename: 'Card',
                  title: 'component_label_orderbook',
                  template: 'orderbook',
                  cols: 14, rows: 14
                },
                {
                  id: 34,
                  __typename: 'Card',
                  title: 'component_label_contract_details',
                  template: 'contractdetails',
                  cols: 7, rows: 7
                },
                {
                  id: 35,
                  __typename: 'Card',
                  title: 'component_label_bids',
                  template: 'bids',
                  cols: 4, rows: 7
                },
                {
                  id: 36,
                  __typename: 'Card',
                  title: 'component_label_trades',
                  template: 'trades',
                  cols: 7, rows: 7
                },
                {
                  id: 37,
                  __typename: 'Card',
                  title: 'component_label_signals',
                  template: 'signals',
                  cols: 7, rows: 7
                },
                {
                  id: 38,
                  __typename: 'Card',
                  title: 'component_label_asks',
                  template: 'asks',
                  cols: 4, rows: 7
                },
                {
                  id: 39,
                  __typename: 'Card',
                  title: 'component_label_portfolio',
                  template: 'portfolio',
                  cols: 7, rows: 7
                },
                {
                  id: 310,
                  __typename: 'Card',
                  title: 'component_label_product_history',
                  template: 'producthistory',
                  cols: 14, rows: 14
                },
                {
                  id: 311,
                  __typename: 'Card',
                  title: 'component_label_signal_history',
                  template: 'signalhistory',
                  cols: 11, rows: 14
                },
                {
                  id: 312,
                  __typename: 'Card',
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

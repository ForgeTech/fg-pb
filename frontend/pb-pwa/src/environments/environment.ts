// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'Development',
  debug: true,
  production: false,
  languages: ['en', 'master'],
  lang: 'en',
  // Use Powerbot variable to preset application-data
  // for development environment
  powerbot: {
    config: {
      lang: 'en',
      view: [
        {
          dashboard: {
            common: {
              table: {
                columnMode: 'force',
                headerHeight: 50,
                rowHeight: 50,
                footerHeight: 50,
                scrollbarV: true,
                scrollbarH: true,
              }
            },
            breakpoint: {
              large: {
                table: {
                  columnMode: 'force',
                  headerHeight: 25,
                  rowHeight: 25,
                  footerHeight: 25,
                  scrollbarV: true,
                  scrollbarH: true,
                }
              }
            }
          }
        }
      ],
      testConfig: {
        serverUrl: 'https://playground.powerbot.config-trading.com/api/v0',
        apiKey: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b',
        store: true
      },
      prodConfig: {
        serverUrl: 'https://playground.powerbot.config-trading.com/api/error',
        backupUrl: 'https://playground.powerbot.config-trading.com/api/v0',
        apiKey: '44fc8162-d2c6-432a-8279-d8d40e5c0e1b',
        store: true
      }
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

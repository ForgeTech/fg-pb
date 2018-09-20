export const environment = {
  name: 'Production',
  debug: false,
  production: true,
  languages: ['en'],
  lang: 'en',
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
    }
  }
};

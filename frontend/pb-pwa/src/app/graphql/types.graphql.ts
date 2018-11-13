//   /**
//    * Create graphql typeDefinitions
//    * for working with local-state
//    */
// var
// export namespace Types {
//   export
//   public fragmentConfigConnection = gql`
//   fragment connectionConfig on ConfigConnection
//   {
//     id
//     apiKey
//     backupUrl
//     serverUrl
//     cache
//     isProduction
//     isValid
//   }`;
//   public fragmentConfigLogging = gql`
//   fragment loggingConfig on ConfigLogging {
//     id
//     logFolder
//     logLevel
//     cache
//     isValid
//   }`;
//   public fragmentState = gql`
//     fragment stateConfig on State {
//     id
//     allowed
//     connection
//     connectionState
//     requestState
//   }`;
//   public fragmentBreakpoint = gql`
//     fragment breakpointConfig on Breakpoint {
//     id
//     name
//     cards {
//       id
//       cols
//       id
//       rows
//       template
//       title
//     }
//     grid {
//       id
//       cols
//       gutterSize
//       rowHeight
//     }
//   }`;
//   public fragmentView = gql`
//     fragment viewConfig on View {
//     id
//     name
//     breakpoints {
//       id
//       name
//       validFor
//       cards {
//         id
//         cols
//         rows
//         template
//         title
//       }
//       grid {
//         id
//         cols
//         gutterSize
//         rowHeight
//       }
//     }
//   }`;

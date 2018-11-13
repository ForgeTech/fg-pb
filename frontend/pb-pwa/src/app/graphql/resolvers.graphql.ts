//   /**
//    * Resolvers for working with graphql local-state
//    */
//   export resolvers = {
//   Mutation: {
//     setConfigConnection: (_, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ id: args.id, __typename: 'ConfigConnection' });
//       const fragment = this.fragmentConfigConnection;
//       const previous: ConfigConnection = cache.readFragment({ id: id, fragment: fragment });
//       const data = this.getMutationWriteData(args, previous);
//       console.log('CONFIG_CONNECTION');
//       console.log(args.data);
//       if (args.delete) {
//         console.log('DELETE');
//       }
//       cache.writeFragment({ id: id, fragment: fragment, data: data });
//       return previous;
//     },
//     setConfigLogging: (_, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'ConfigLogging', id: args.id });
//       const fragment = this.fragmentConfigLogging;
//       const previous = cache.readFragment({ fragment, id });
//       const data = this.getMutationWriteData(args, previous);
//       cache.writeFragment({ id: id, fragment: fragment, data: data });
//       return data;
//     },
//     setState: (_, args, { cache, getCacheKey }) => {
//       // this.persistor.pause();
//       const id = getCacheKey({ __typename: 'State', id: args.id });
//       const fragment = this.fragmentState;
//       const previous = cache.readFragment({ fragment, id });
//       const data = this.getMutationWriteData(args, previous);
//       cache.writeFragment({ id: id, fragment: fragment, data: data });
//       // this.persistor.resume();
//       return data;
//     },
//     toggleDarkTheme: (_, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'Config', id: args.id });
//       const fragment = gql`
//         fragment darkTheme on Config {
//             darkTheme
//         }`;
//       const previous = cache.readFragment({ fragment, id });
//       const data = { darkTheme: !previous.darkTheme };
//       cache.writeData({ id, data });
//       return data;
//     },
//     toggleAllowed: (_, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'State', id: args.id });
//       const fragment = gql`
//         fragment allowed on Config {
//             allowed
//         }`;
//       const previous = cache.readFragment({ fragment, id });
//       const data = { darkTheme: !previous.allowed };
//       cache.writeData({ id, data });
//       return data;
//     },
//   },
//   Query: {
//     getConfigConnection: (parent, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'ConfigConnection', id: args.id });
//       const fragment = this.fragmentConfigConnection;
//       const data = cache.readFragment({ id: id, fragment: fragment });
//       return data;
//     },
//     getConfigLogging: (parent, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'ConfigLogging', id: args.id });
//       const fragment = this.fragmentConfigLogging;
//       const data = cache.readFragment({ fragment, id });
//       return data;
//     },
//     getState: (parent, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'State', id: args.id });
//       const fragment = this.fragmentState;
//       const data = cache.readFragment({ fragment, id });
//       return data;
//     },
//     getBreakpoint: (parent, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'Breakpoint', id: args.id });
//       const fragment = this.fragmentBreakpoint;
//       const data = cache.readFragment({ fragment, id });
//       return data;
//     },
//     getView: (parent, args, { cache, getCacheKey }) => {
//       const id = getCacheKey({ __typename: 'View', id: args.id });
//       const fragment = this.fragmentView;
//       const data = cache.readFragment({ fragment, id });
//       return data;
//     }
//   }
// }

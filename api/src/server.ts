import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginCacheControl } from 'apollo-server-core';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { typeDefs, resolvers } from './schema';

const DEFAULT_MAX_AGE = process.env.DEFAULT_MAX_AGE ?? 1800;
const PORT = process.env.PORT ?? 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    responseCachePlugin(),
    ApolloServerPluginCacheControl({
      defaultMaxAge: DEFAULT_MAX_AGE as number
    })
  ]
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

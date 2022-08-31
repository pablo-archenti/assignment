import { ApolloClient, InMemoryCache } from '@apollo/client';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache()
});

export default client;

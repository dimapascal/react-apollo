import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();
const link = createHttpLink({
    uri: 'http://localhost:4000/graphql'
});

export const client = new ApolloClient({
    link,
    cache,
    name: 'react-apollo-client'
});

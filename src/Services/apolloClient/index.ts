import { apolloAuthLink } from './apolloAuthLink';
import { apolloErrorParserLink } from './apolloErrorParserLink';
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const HTTP_LINK_URI = 'http://localhost:4000/graphql';
const CLIENT_NAME = 'react-apollo-client';

const httpLink = createHttpLink({ uri: HTTP_LINK_URI });

const authLink = new ApolloLink(apolloAuthLink);

const errorLink = onError(apolloErrorParserLink);

const link = errorLink.concat(authLink.concat(httpLink));

const cache = new InMemoryCache();

export const client = new ApolloClient({
    link,
    cache,
    name: CLIENT_NAME
});

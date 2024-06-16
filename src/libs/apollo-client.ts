import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';

const removeTypenameLink = removeTypenameFromVariables();

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

const link = from([removeTypenameLink, httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ addTypename: false }),
});
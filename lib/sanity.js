import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getSanityContent({ query, variables = {} }) {
  const client = new ApolloClient({
    uri: `https://${process.env.SANITY_PROJECT_ID }.api.sanity.io/v1/graphql/production/default`,
    cache: new InMemoryCache()
  });


  const { data } = await client.query({
  //const result = await client.query({
    query: gql`
      ${query}
    `
  });

  return data;
}
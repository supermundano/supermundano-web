import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

interface SanityQuery {
  query: string;
  variables?: Object;
}

export async function getSanityContent({ query, variables = {} } : SanityQuery) {
  const client = new ApolloClient({
    uri: `https://${process.env.SANITY_PROJECT_ID }.api.sanity.io/v1/graphql/production/default`,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      ${query}
    `,
    variables
  });

  return data;
}
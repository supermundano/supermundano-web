import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const sanityClient = require('@sanity/client')

export const client = sanityClient({
  projectId: '5ltsm4nn',
  dataset: 'production', // use current UTC date - see "specifying API version"!
  token: 'skDBllPeT6b8RqVfCbjoxcIOZs6IEBkUKrAR5lcoRufTBmkyJd4ArIgE4C7c0tC54fN01hYqiz3JF0S3MVBqoF6ekwdrt9UWXzPPLG2ci20Z5UcwtgWDHHJvOIVfgUZdyX3KEhtBvdsMzY7nSgnnHUNrnY3JRbWsJblfv4TZGLiELTHhZTVt', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

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
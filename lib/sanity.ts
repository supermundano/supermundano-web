import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import  SanityClient  from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { useNextSanityImage } from 'next-sanity-image';

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


export function urlFor(source:any) {
  const builder = imageUrlBuilder(sanityClient)
  return builder.image(source)
}

export const sanityClient = SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production', // use current UTC date - see "specifying API version"!
  apiVersion: '2021-08-16',
  useCdn: true, // `false` if you want to ensure fresh data
})

export function getImageProps(image:any){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageProps = useNextSanityImage(
    sanityClient,
    image,
    {
      enableBlurUp: false,
      blurUpImageWidth: 200,
      blurUpImageQuality: 40,
      blurUpAmount: 24
    }
  );
  return imageProps;
}

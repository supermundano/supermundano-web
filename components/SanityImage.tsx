import Image from 'next/image'
import  SanityClient  from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'






export default function SanityImage( image_data :any) {

  function urlFor(source:any) {
    return builder.image(source)
  }

  const sanityClient = SanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production', // use current UTC date - see "specifying API version"!
    useCdn: true, // `false` if you want to ensure fresh data
  })

  const builder = imageUrlBuilder(sanityClient)
  const ref = image_data.image_data?.asset?._ref;
  const imageDimensions = getImageDimensions(ref);

  return (
    <>
      <Image src={urlFor(ref).url()} layout="responsive" width={imageDimensions.width} height={imageDimensions.height} sizes="(max-width: 800px) 100vw, 800px" />
    </>
  );



}

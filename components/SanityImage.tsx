import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import  SanityClient  from '@sanity/client'



export default function SanityImage( image_data :any) {


    console.log(image_data);

    const sanityClient = SanityClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: 'production', // use current UTC date - see "specifying API version"!
        useCdn: true, // `false` if you want to ensure fresh data
    })

    const imageProps = useNextSanityImage(
        sanityClient ,
        image_data
    );

    return (
            <Image {...imageProps} layout="responsive" alt={image_data._key} sizes="(max-width: 800px) 100vw, 800px" />
    );



}

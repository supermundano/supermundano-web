import Image from 'next/image'
import {getImageDimensions} from '@sanity/asset-utils'
import { urlFor } from '../lib/sanity'





export default function SanityImage( image_data :any) {

  const ref = image_data.image_data?.asset?._ref
  const imageDimensions = getImageDimensions(ref)
  const imageURL = urlFor(ref).url()
  const strimageurl = (typeof imageURL === 'string') ? imageURL : '';

  // TODO: crear alt de la imagen dinámico
  return (
      <Image alt="Supermundano" src={ strimageurl } layout="responsive" width={imageDimensions.width} height={imageDimensions.height} sizes="(max-width: 800px) 100vw, 800px" />
  );



}

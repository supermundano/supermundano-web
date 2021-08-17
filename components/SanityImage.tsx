import Image from 'next/image'
import {getImageDimensions} from '@sanity/asset-utils'
import { urlFor } from '../lib/sanity'

export default function SanityImage( image_data :any) {

  const ref = image_data.image_data?.asset?._ref
  const imageDimensions = getImageDimensions(ref)
  const placeholderUrl = urlFor(ref).width(200).url()
  const strPlaceholderUrl = (typeof placeholderUrl === 'string') ? placeholderUrl : '';
  const imageURL = urlFor(ref).url()
  const strImageUrl = (typeof imageURL === 'string') ? imageURL : '';
  const altText = image_data.image_data?.asset?.altText || 'Imagen Supermundano';

  return (
      <Image alt={altText} src={ strImageUrl } layout="responsive" width={imageDimensions.width} height={imageDimensions.height} sizes="(max-width: 800px) 100vw, 800px" placeholder="blur" blurDataURL={strPlaceholderUrl} />
  );
}

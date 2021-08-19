import Image from 'next/image'
import { sanityClient } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImage( image_data :any) {
  const image_ref = image_data.image_data.asset._ref;
  const imageProps = useNextSanityImage(
		sanityClient,
		image_ref,
    {
			blurUpImageWidth: 200,
			blurUpImageQuality: 40,
			blurUpAmount: 24
		}
	);
  const src = (typeof imageProps?.src === 'string') ? imageProps?.src : '';
  const altText = image_data.image_data?.asset?.altText || 'Imagen Supermundano';

  return (
      <Image alt={altText} src={src} {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
  );
}
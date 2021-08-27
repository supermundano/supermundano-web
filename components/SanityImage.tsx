import Image from 'next/image'
import { getImageProps } from '../lib/sanity'

export default function SanityImage( {image_data, image_size, have_source} :any) {

  if(!image_size){
    image_size = "1600";
  }

  var image_ref;

  // Save image path depending if we got all source or only referral to get its properties
  if(have_source){
    image_ref = image_data;
  }else{
    image_ref = image_data.asset._ref;
  }

  const imageProps = getImageProps(image_ref);
  const src = (typeof imageProps?.src === 'string') ? imageProps?.src : '';
  const altText = image_data?.asset?.altText || 'Imagen Supermundano';

  return (
      <Image alt={altText} src={src} {...imageProps} layout="responsive" sizes={`(max-width: ${image_size}px) 100vw, ${image_size}px` }/>
  );
}

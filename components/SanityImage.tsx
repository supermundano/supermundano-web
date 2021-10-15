import Image from 'next/image';
import { getImageProps } from '../lib/sanity';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

export default function SanityImage( {image_data, image_size, have_source, not_animated} :any) {
  gsap.registerPlugin(ScrollTrigger);
  var classes = '';

  if(!image_size){
    image_size = "1600";
  }

  if(!not_animated){
    classes = "slide-up";
  }

  useEffect(() => {

    const slideLeftItems = gsap.utils.toArray('.slide-up');
    slideLeftItems.forEach((item:any) => {
      var tl = gsap.timeline();
      tl.to(item, { y: 100, autoAlpha: 0, opacity: 0, duration: 0 });
      tl.to(item, { y: 0, autoAlpha: 1, opacity: 1, duration: 0.6 });


      ScrollTrigger.create({
        trigger: item,
        animation: tl,
        toggleActions: 'play none none none',
        once: true,
      });

    });
  }, [])

  var image_ref;

  // Save image path depending if we got all source or only referral to get its properties
  if(have_source){
    image_ref = image_data;
  }else{
    image_ref = image_data.asset._ref;
  }

  const imageProps = getImageProps(image_ref);
  const src = (typeof imageProps?.src === 'string') ? imageProps?.src : '';
  const altText = image_data?.asset?.alt || 'Imagen Blavet';

  return (
      <Image className={classes} alt={altText} src={src} {...imageProps} layout="responsive" sizes={`(max-width: ${image_size}px) 100vw, ${image_size}px` } />
  );
}

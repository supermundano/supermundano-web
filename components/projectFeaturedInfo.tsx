import styled from "styled-components";
import Image from 'next/image'
import {getImageDimensions} from '@sanity/asset-utils'
import { urlFor } from '../lib/sanity'

// TODO: font-weight: 200; no está definido
// TODO: Por qué project-image es un display: flex con justify-content: end ???
const ProjectFeaturedInfoStyle = styled.div`
  display: grid;
  grid-template-columns: 33% 67%;

  .project-services{
    margin-bottom: 8rem;
  }

  h2{
    font-weight: 200;
    margin-top: 4rem;
  }

  p{
    margin: 0;
  }

  /* .project-image{
    display: flex;
    justify-content: end;
  } */
`;

// TODO: .widget-title debería tener un nombre mejor, no estamos dentro de un widget
// TODO: El h3 debería ser un h1
export default function ProjectFeaturedInfo( {title, services, colabs, featured_image}:any ) {
    const imageDimensions = getImageDimensions(featured_image.asset);
    const placeholderUrl = urlFor(featured_image).width(200).url()
    const strPlaceholderUrl = (typeof placeholderUrl === 'string') ? placeholderUrl : '';

    return(
        <ProjectFeaturedInfoStyle>
          <div className="project-info">

            <h3 className="widget-title">{ title }</h3>
            <div className="project-services">
              <h2>Services</h2>
              {Object.entries(services).map(function(servicio, num){
                return (
                    <p key={num}>{ servicio[1] } </p>
                )
              })}
            </div>

            <div className="project-colabs">
              <h2>Colabs</h2>
              <p>{ colabs }</p>
            </div>

          </div>

          <div className="project-image">
            <div className="wrap">
              <Image alt={title} src={ featured_image?.asset?.url } layout="responsive" width={imageDimensions.width} height={imageDimensions.height} sizes="(max-width: 800px) 100vw, 800px" placeholder="blur" blurDataURL={strPlaceholderUrl} />
            </div>
          </div>

        </ProjectFeaturedInfoStyle>
    )
}

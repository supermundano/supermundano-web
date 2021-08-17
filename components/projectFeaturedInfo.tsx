import styled from "styled-components";
import Image from 'next/image'
import { getImage } from '@sanity/asset-utils'
import { sanityClient } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image';

const ProjectFeaturedInfoStyle = styled.div`

  .project-info{
    margin-bottom: 5rem;

    .wrap{
      width: 100%;
    }

  }

  .project-services{
    margin-bottom: 8rem;
  }

  h2{
    font-weight: 300;
    margin-top: 4rem;
  }

  p{
    margin: 0;
  }

  @media (min-width: 990px){
    display: grid;
    grid-template-columns: 33% 67%;

    .project-info{
      margin-bottom: 0;
    }
  }

`;

export default function ProjectFeaturedInfo( {title, services, colabs, featured_image}:any ) {
    const listImage = getImage(featured_image.asset)
    const imageProps = useNextSanityImage(
      sanityClient,
      listImage,
      {
        blurUpImageWidth: 200,
        blurUpImageQuality: 40,
        blurUpAmount: 24
      }
    );
    const src = (typeof imageProps?.src === 'string') ? imageProps?.src : '';

    return(
        <ProjectFeaturedInfoStyle>
          <div className="project-info">

              <h1 className="secondary-title">{ title }</h1>
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
              <Image alt={title} src={src} {...imageProps} layout="responsive" sizes="(max-width: 800px) 100vw, 800px" />
            </div>
          </div>

        </ProjectFeaturedInfoStyle>
    )
}

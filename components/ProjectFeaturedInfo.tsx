import styled from "styled-components";
import { getImage } from '@sanity/asset-utils'
import { Fragment } from 'react'
import SanityImage from '../components/SanityImage'

const ProjectFeaturedInfoStyle = styled.div`

  display: flex;
  flex-direction: column-reverse;

  .project-info{
    margin-top: 2.5rem;

    .wrap{
      width: 100%;
    }
  }

  .project-info-columns > div{
    h2{
      font-weight: 300;
      margin-top: 4rem;
      font-size: var(--font-size) !important;
    }

    p{
      margin: 0;
    }
  }

  @media (min-width: 400px){
    .project-info-columns{
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 1rem;
    }
  }

  @media (min-width: 576px){
    .project-info{
      margin-top: 4rem;
    }

    .project-info-columns{
      & > div{
        h2{
          margin-top: 0;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media (min-width: 975px){
    display: grid;
    grid-template-columns: 33% 67%;
    column-gap: 0;

    .project-info-columns{
      display: block;
    }

    .project-info{
      margin: 0;

      h2{
        margin-top: 4rem;
      }
    }

    .project-info-columns{
      & > div{
        h2{
          margin-top: 4rem;
        }

      }
    }

    .project-services{
      margin-bottom: 6rem;
    }
  }

`;

export default function ProjectFeaturedInfo( {title, services, colabs, featured_image}:any ) {
    const listImage = getImage(featured_image.asset)

    return(
        <ProjectFeaturedInfoStyle>
          <div className="project-info">
            <h1 className="secondary-title">{ title }</h1>
            <div className="project-info-columns">
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
                  {colabs.split('\n').map((item:string, key:string) => {
                    return <p key={key} >{item}</p>
                  })}
              </div>
            </div>
          </div>

          <div className="project-image">
            <div className="wrap">
            <SanityImage image_data={ listImage } have_source={true}/>
            </div>
          </div>

        </ProjectFeaturedInfoStyle>
    )
}

import styled from "styled-components";
import Image from 'next/image'

// TODO: Por qué project-image es un display: flex con justify-content: end ???
const ProjectFeaturedInfoStyle = styled.div`

  .project-info{
    margin-bottom: 5rem;
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

  .project-image{
    display: flex;
    justify-content: end;
  }

  @media (min-width:576px){
    .project-info{
      margin-bottom: 5rem;
    }
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

              <Image alt={title} src={featured_image.asset?.url} width="1161" height="693" />
          </div>

        </ProjectFeaturedInfoStyle>
    )
}

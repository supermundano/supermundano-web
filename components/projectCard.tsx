import styled from 'styled-components'
import Project from '../models/project'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCardStyle = styled.img`
  
  img{
    width: 100%;
    height: auto;
  }

  .project{

    &__title{
      margin: 2.5rem 0;
    }

    &__description{

    }

  }

`;


export default function ProjectCard(project:Project) {
    console.log(project)
    return (
        <div className="project">
          <ProjectCardStyle/>
          <Link href="/project/">
            <a>
              <Image src={project.list_image} width="516" height="702" />
              <h3 className="project__title">{project.title}</h3>
            </a>
          </Link>
          <p className="project__description">{project.description}</p>
        </div>
      )
}
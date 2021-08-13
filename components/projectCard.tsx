import styled from 'styled-components'
import Project from '../models/project'
import Link from 'next/link'
import Image from 'next/image'

// TODO: Hacer estilos globales para títulos y así poder reutilizarlos DRY
const ProjectCardStyle = styled.article`
  img{
    width: 100%;
    height: auto;
  }

  .title{
    font-size: var(--text-size);
    margin: 1.5rem 0;
  }
`;

export default function ProjectCard(project:Project) {

    var slug = `project/${project.slug}`;

    return (
      <ProjectCardStyle>
        <Link href={slug}>
            <a>
              <Image alt="project.title" src={project.list_image} width="600" height="822" />
            </a>
        </Link>
        <h2 className="title">
          <Link href={slug}><a>{project.title}</a></Link>
        </h2>
        <p className="description">{project.description}</p>
      </ProjectCardStyle>
    )
}

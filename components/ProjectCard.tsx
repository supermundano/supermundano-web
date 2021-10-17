import styled from 'styled-components'
import Project from '../models/project'
import Link from 'next/link'
import { getImage } from '@sanity/asset-utils'
import SanityImage from '../components/SanityImage'

const ProjectCardStyle = styled.article`
  img{
    width: 100%;
    height: auto;
  }

  .title{
    font-size: var(--text-size);
    margin: 1.5rem 0;
  }

  .description{
    max-width: 80%;
  }
`;

export default function ProjectCard(project:Project) {
  const listImage = project.list_image ? getImage(project.list_image) : null;

  var slug = `/project/${project.slug}`;

  return (
    <ProjectCardStyle>
      <Link href={slug}>
          <a>
            {/* TODO: have_source no debería ser has_source? */}
            {/* TODO: not_animated no debería ser animated? (not_animated = false sería que está animado? muy enrevesado...) No se deben negar los nombres de las variables */}
            <SanityImage image_data={ listImage } image_alt={project.list_image_alt} image_size="700" have_source={true} not_animated={true}/>
          </a>
      </Link>
      <h2 className="title">
        <Link href={slug}><a>{project.title}</a></Link>
      </h2>
      <p className="description">{project.description}</p>
    </ProjectCardStyle>
  )
}

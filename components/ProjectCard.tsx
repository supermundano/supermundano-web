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
`;

export default function ProjectCard(project:Project) {

  const listImage = getImage(project.list_image)

  var slug = `/project/${project.slug}`;

  return (
    <ProjectCardStyle>
      <Link href={slug}>
          <a>
            <SanityImage image_data={ listImage } image_size="700" have_source={true}/>
          </a>
      </Link>
      <h2 className="title">
        <Link href={slug}><a>{project.title}</a></Link>
      </h2>
      <p className="description">{project.description}</p>
    </ProjectCardStyle>
  )
}

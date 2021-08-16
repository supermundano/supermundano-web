import styled from 'styled-components'
import Project from '../models/project'
import Link from 'next/link'
import Image from 'next/image'
import {getImageDimensions} from '@sanity/asset-utils'
import { urlFor } from '../lib/sanity'


const ProjectCardStyle = styled.article`
  a{

  }

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
    const ref = project.list_image
    const imageDimensions = getImageDimensions(ref)
    const placeholderUrl = urlFor(ref).width(200).url()
    const strPlaceholderUrl = (typeof placeholderUrl === 'string') ? placeholderUrl : '';
    const imageURL = urlFor(ref)?.url()
    const strImageUrl = (typeof imageURL === 'string') ? imageURL : '';

    return (
      <ProjectCardStyle>
        <Link href={slug}>
            <a>
              <Image alt="Supermundano" src={ strImageUrl } layout="responsive" width={imageDimensions.width} height={imageDimensions.height} sizes="(max-width: 800px) 100vw, 800px" placeholder="blur" blurDataURL={placeholderUrl} />
            </a>
        </Link>
        <h2 className="title">
          <Link href={slug}><a>{project.title}</a></Link>
        </h2>
        <p className="description">{project.description}</p>
      </ProjectCardStyle>
    )
}

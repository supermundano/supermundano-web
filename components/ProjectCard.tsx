import styled from 'styled-components'
import Project from '../models/project'
import Link from 'next/link'
import Image from 'next/image'
import { getImage } from '@sanity/asset-utils'
import { sanityClient } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image';

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

  var slug = `/project/${project.slug}`;

  return (
    <ProjectCardStyle>
      <Link href={slug}>
          <a>
            <Image alt="Supermundano" src={src} {...imageProps} layout="responsive" sizes="(max-width: 1600px) 100vw, 1600px" />
          </a>
      </Link>
      <h2 className="title">
        <Link href={slug}><a>{project.title}</a></Link>
      </h2>
      <p className="description">{project.description}</p>
    </ProjectCardStyle>
  )
}

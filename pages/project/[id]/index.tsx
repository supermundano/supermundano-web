import dynamic from 'next/dynamic'
import { getSanityContent } from '../../../lib/sanity'
import { allProjectsQuery, singleProjectQuery } from '../../../lib/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createGlobalStyle } from 'styled-components'
import Page from '../../../components/Page'
import ProjectFeaturedInfo from '../../../components/ProjectFeaturedInfo'
import ProjectEditorInfo from '../../../components/ProjectEditorInfo'
// const Page = dynamic(() => import('../../../components/Page'))
// const ProjectFeaturedInfo = dynamic(() => import('../../../components/ProjectFeaturedInfo'))
// const ProjectEditorInfo = dynamic(() => import('../../../components/ProjectEditorInfo'))


const GlobalStyleProject = createGlobalStyle`
  body{
    background: var(--bgSecondary) !important;
    color: var(--bgPrimary) !important;

    a{
      color: var(--bgPrimary) !important;

      &:hover{
        color: var(--brandTertiary) !important;
      }

      &:after{
        background: var(--brandTertiary) !important;
      }
    }

    .footer-info-wrap div, h1{
      a{
        &:hover{
          color: currentColor !important;
        }
      }
    }

    .secondary-title, .wrap__menu li a, .title-secondary{
      color: var(--brandTertiary) !important;
    }

    #countdown{
      background: var(--bgSecondary) !important;
      color: var(--bgPrimary) !important;
    }
  }
`;

const Project = ( { slug, data } : any ) => {
  const { title } = data
  const { services } = data
  const { colaborators } = data
  const { featured_image } = data
  const { contentRaw } = data
  const { description } = data
  const { title_seo } = data;
  const { description_seo } = data;
  const { image_seo } = data;
  const { title_twitter } = data;
  const { description_twitter } = data;
  const { image_twitter } = data;

  const ogTags:any = {
    "resourceType": 'article',
    "previewImage" : (image_seo) ? image_seo : featured_image?.asset?.url,
    "previewImageAlt" : (image_seo?.asset?.alt) ? image_seo?.asset?.alt : featured_image?.asset?.alt,
    "siteName" : "Blavet Studio",
    "ogTitle" : (title_seo) ? title_seo : title,
    "titleTwitter" : (title_twitter) ? title_twitter : '',
    "description": description,
    "descriptionSeo": (description_seo) ? description_seo : description,
    "descriptionTwitter" : (description_twitter) ? description_twitter : '',
    "imageTwitter" : (image_twitter?.asset?.url) ? image_twitter?.asset?.url : '',
    "imageTwitterAlt" : (image_twitter?.asset?.alt) ? image_twitter?.asset?.alt : '',
  };

  return (
    <>
    <GlobalStyleProject/>
    <Page ogTags={ogTags} canonicalURL={`/project/${slug}`}>
      <div className="project">
        <ProjectFeaturedInfo title={title} services={services} colabs={colaborators} featured_image={featured_image} />
        <ProjectEditorInfo content_raw={ contentRaw }/>
      </div>
    </Page>
    </>
  )
}

export default Project

export const getStaticPaths: GetStaticPaths = async () => {
  // Call Sanity API endpoint to get projects
  const { allProject } = await getSanityContent({
    query: `
      ${allProjectsQuery}
    `,
  });

  const paths = allProject.map((project : any) => (
      { params: { id: project?.slug?.current } }
    )
  )

  return { paths, fallback: false }
}


// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the project `slug`.
  // If the route is like /project/slug-of-project, then params.id is slug-of-project
  const { allProject } = await getSanityContent({
      query: singleProjectQuery,
      variables: {slug: params?.id}
    }
  );

  const project = allProject[0];

  // Pass post data to the page via props
  return { props: { data : project, slug : params?.id } }
}

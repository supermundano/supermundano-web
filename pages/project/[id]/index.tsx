import { getSanityContent } from '../../../lib/sanity'
import { allProjectsQuery, singleProjectQuery } from '../../../lib/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createGlobalStyle } from 'styled-components'
import Page from '../../../components/Page'
import ProjectFeaturedInfo from '../../../components/ProjectFeaturedInfo'
import ProjectEditorInfo from '../../../components/ProjectEditorInfo'


const GlobalStyleProject = createGlobalStyle`
  body{
    background: var(--bgSecondary) !important;
    color: var(--bgPrimary) !important;
  }

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



`;

const Project = ( { data } : any ) => {
  const { title } = data
  const { services } = data
  const { colaborators } = data
  const { featured_image } = data
  const { contentRaw } = data

  return (
    <>
    <GlobalStyleProject/>
    <Page>
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
  return { props: { data : project } }
}

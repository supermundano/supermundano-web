import dynamic from 'next/dynamic';
const Page = dynamic( ()=>  import('../../../components/Page'));
const ProjectFeaturedInfo = dynamic( ()=>  import('../../../components/ProjectFeaturedInfo'));
const ProjectEditorInfo = dynamic( ()=>  import('../../../components/ProjectEditorInfo'));
import { getSanityContent } from '../../../lib/sanity'
import { allProjectsQuery, singleProjectQuery } from '../../../lib/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createGlobalStyle } from 'styled-components'


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
  console.log(slug);



  const ogTags:any = {"twitterHandle" : '', "resourceType": 'article', "previewImage" : featured_image?.asset?.url, "siteName" : "Blavet Studio", "pageTitle" : title, "description": description};

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

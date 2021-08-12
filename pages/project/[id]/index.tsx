import { useRouter } from 'next/router'
import { getSanityContent } from '../../../lib/sanity'
import { allProjectsQuery, singleProjectQuery } from '../../../lib/queries'
import { GetStaticPaths, GetStaticProps } from 'next'

const Project = ( { data } : any) => {
  const router = useRouter()
  const { id } = router.query
  const { title } = data

  return (
    <div className="project">
      <p>ID: {id}</p>
      <p>Title: {title}</p>
    </div>
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
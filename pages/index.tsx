import Page from '../components/page'
import { getSanityContent } from '../lib/sanity';
import { featuredProjectsQuery } from '../lib/queries';
import { GetStaticProps } from 'next'
import PageDescription from '../components/pageDescription'
import ProjectsContainer from '../components/projectsContainer'


export default function Home( {data}:any ) {
  const  {featured_projects}  = data;

  return (
    <div className="home">
      <Page>
        <PageDescription></PageDescription>
        <ProjectsContainer { ...featured_projects}></ProjectsContainer>
      </Page>
    </div>
  )
}

// https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
export const getStaticProps: GetStaticProps = async () => {
  const { allHomepage } = await getSanityContent({
    query: `
      ${featuredProjectsQuery}
    `,
  });
  const data = allHomepage[0];

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

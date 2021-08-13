import MainHomePage from '../components/mainHomePage'
import Page from '../components/page'
import { getSanityContent } from '../lib/sanity';
import { featuredProjectsQuery } from '../lib/queries';
import { GetStaticProps } from 'next'
import Project from '../models/project'
import PageDescription from '../components/pageDescription'


export default function Home( {data}:any ) {
    const  {featured_projects}  = data;

  return (
    <div className="home">
      <Page>

        <PageDescription></PageDescription>
        <MainHomePage {...featured_projects}/>
      </Page>
    </div>
  )
}

/*

export function parseToProject(data:Object){
  var projects:Project[] = [];
  Object.entries(data).map(function(project){
    projects.push(
      new Project(
        project[1].title,
        project[1].description,
        project[1].list_image?.asset?.url
        ));
  });
  return projects;
}
*/


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
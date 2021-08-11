import MainHomePage from '../../components/mainHomePage'
import Page from '../../components/Page'
import { getSanityContent } from '../../lib/sanity';
import { featuredProjectsQuery } from '../../lib/queries';
import Project from '../../models/project'


export default function Home( {data}:any ) {
    console.log(data);
    const  {featured_projects}  = data;

  return (
    
    <Page>
      <MainHomePage {...featured_projects}/>
    </Page>
  )
}

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

export async function getStaticProps() {
  // const { data } = await getSanityContent({
  const { allHomepage } = await getSanityContent({
    query: `
      ${featuredProjectsQuery}
    `,
  });
  console.log(allHomepage);
  
  const data = allHomepage[0];

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
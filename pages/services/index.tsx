import Page from '../../components/page'
import ServicesTextSection from '../../components/servicesTextSection'
import ServicesListSection from '../../components/servicesListSection'
import { getSanityContent } from '../../lib/sanity';
import { featuredProjectsQuery } from '../../lib/queries';


export default function Servicios( {data}:any ) {
  const  {featured_projects}  = data;

  return (
    <div className="services">
      <Page>
        <ServicesTextSection/>
        <ServicesListSection></ServicesListSection>
      </Page>
    </div>
  )
}

export async function getStaticProps() {
  // const { data } = await getSanityContent({
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
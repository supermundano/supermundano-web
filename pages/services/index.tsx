import Page from '../../components/page'
import ServicesTextSection from '../../components/servicesTextSection'
import ServicesListSection from '../../components/servicesListSection'
import { getSanityContent } from '../../lib/sanity';
import { featuredProjectsQuery } from '../../lib/queries';


export default function Servicios( {data}:any ) {
    console.log(data);
    const  {featured_projects}  = data;

  return (
    <div className="services">
      <Page>
        <ServicesTextSection></ServicesTextSection>
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
  console.log(allHomepage);
  
  const data = allHomepage[0];

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
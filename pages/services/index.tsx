import Page from '../../components/Page'
import ServicesTextSection from '../../components/ServicesTextSection'
import ServicesListSection from '../../components/ServicesListSection'
import { getSanityContent } from '../../lib/sanity';
import { featuredProjectsQuery } from '../../lib/queries';


export default function Servicios( ) {
  return (
    <div className="services">
      <Page>
        <ServicesTextSection/>
        <ServicesListSection></ServicesListSection>
      </Page>
    </div>
  )
}

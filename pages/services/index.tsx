import Page from '../../components/Page'
import ServicesTextSection from '../../components/ServicesTextSection'
import ServicesListSection from '../../components/ServicesListSection'

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

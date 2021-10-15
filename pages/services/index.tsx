import Page from '../../components/Page';
import ServicesTextSection from '../../components/ServicesTextSection';
import ServicesListSection from '../../components/ServicesListSection';

export default function Servicios() {
  const ogTags:any = {
    "resourceType": 'website',
    "previewImage" : '',
    "siteName" : "Blavet Studio",
    "ogTitle" : "Blavet",
    "titleTwitter" : '',
    "description": '',
    "descriptionSeo": "Creative Brands in Context",
    "descriptionTwitter" : '',
    "imageTwitter" : ''
  };

  return (
    <div className="services">
      <Page ogTags={ogTags} canonicalURL="/services">
        <ServicesTextSection/>
        <ServicesListSection></ServicesListSection>
      </Page>
    </div>
  )
}

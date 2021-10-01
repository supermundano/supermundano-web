import dynamic from 'next/dynamic';
const Page = dynamic( ()=>  import('../../components/Page'));
const ServicesTextSection = dynamic( ()=>  import('../../components/ServicesTextSection'));
const ServicesListSection = dynamic( ()=>  import('../../components/ServicesListSection'));

export default function Servicios( ) {
  const ogTags:any = {"twitterHandle" : '', "resourceType": 'website', "previewImage" : '', "siteName" : "Blavet Studio", "pageTitle" : "Blavet", "description": "Creative Brands in Context"};
  return (
    <div className="services">
      <Page ogTags={ogTags} canonicalURL="/services">
        <ServicesTextSection/>
        <ServicesListSection></ServicesListSection>
      </Page>
    </div>
  )
}

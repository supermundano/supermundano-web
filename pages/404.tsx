import Page from '../components/Page'
import Link from 'next/link'
import styled from "styled-components"

const Content404Style = styled.div`
  margin-bottom: 5rem;

  .wrap{
    padding-top: 5rem;
    border-top: 1px solid var(--brandFour);
    margin-top: 5rem;
  }

  @media (min-width: 576px){
    display: grid;
    grid-template-columns: 25% 75%;

    .wrap{
      border: initial;
      margin: 0;
      padding: 0;
      padding-bottom: 10rem;
      border-bottom: 1px solid var(--brandFour);
      margin-bottom: 10rem;
    }
  }
`;

export default function _404() {

  const ogTags:any = {"twitterHandle" : '', "resourceType": 'website', "previewImage" : '', "siteName" : "Blavet Studio", "pageTitle" : "Blavet", "description": "Creative Brands in Context"};
  return (
    <Page ogTags={ogTags} canonicalURL="/404">
      <Content404Style>
        <div className="title">
          <h2 className="secondary-title">OOOOPS</h2>
        </div>
        <div className="wrap">
          <p>The page you are looking for couldn’t be found.</p>
          <p><Link href="/">Go to home</Link></p>
        </div>
      </Content404Style>
    </Page>
  )
}


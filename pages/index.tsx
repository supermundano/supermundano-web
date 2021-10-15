import dynamic from 'next/dynamic'
import Page from '../components/Page';
import { getSanityContent } from '../lib/sanity';
import { featuredProjectsQuery } from '../lib/queries';
import { GetStaticProps } from 'next';
import PageDescription from '../components/PageDescription';
import ProjectsContainer from '../components/ProjectsContainer';
// const ProjectsContainer = dynamic(() => import('../components/ProjectsContainer'))


export default function Home( {data}:any ) {

  const  {featured_projects}  = data;
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
    <div className="home">
      <Page ogTags={ogTags}>
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
  };
}

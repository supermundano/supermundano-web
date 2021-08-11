import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Footer from './components/footer'
import { getSanityContent } from '../lib/sanity';
import { featuredProjectsQuery } from '../lib/queries';
import { GetStaticProps } from 'next'

export default function Home( { data } : any ) {
  console.log(data);
  const { featured_projects } = data;
  console.log(featured_projects);

  return (
    <div className={styles.container}>
      <Head>
        <title>Supermundano</title>
        <meta name="description" content="Creative Brands in Context" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>

      </main>
      <Footer/>
    </div>
  )
}

// https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
export const getStaticProps: GetStaticProps = async (context) => {
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
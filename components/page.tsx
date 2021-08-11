import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    color: #E2E2E2;
    font-size: 1rem;
    font-weight: 100;
    line-height: 1.3;
  }

  header{
    margin-bottom: 5rem;
  }

  footer{
    margin-top: 15vh;
  }
`;

export default function Page({ children }:any) {

  return (
    <div className={styles.container}>
      <GlobalStyle />
      <Head>
        <title>Supermundano</title>
        <meta name="description" content="Creative Brands in Context" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

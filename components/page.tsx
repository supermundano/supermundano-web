import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: black;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 40px;
    color: #E2E2E2;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.3;
  }

  footer{
    margin-top: 15vh;
  }
  
  main{
    width: 100%;
  }
  
  .widget-title{
    text-transform: uppercase;
    color: #4E4E4E;
    margin: 0;
    margin-bottom: 2.5rem;
    font-size: 1.4rem;
    line-height: 1.1;
    font-weight: 400;
  }
`;

export default function Page({ children }:any) {

  return (
    <>
    <div className="page-container">
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
    </>
  )
}

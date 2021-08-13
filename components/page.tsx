import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { createGlobalStyle } from 'styled-components';

// TODO: No estamos haciendo un Reset Global.
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Helvetica Neue Local';
    src: url('/static/HelveticaNeue.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue Local';
    src: url('/static/HelveticaNeue-Bold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  html {
    --brandPrimary:   #E2E2E2;
    --brandSecondary: #000000;
    --brandTertiary:  #B4B4B4;
    --brandFour:      #4E4E4E;
    --bgPrimary:      #000000;
    --bgSecondary:    #F4F4F4;
    --maxWidth: 83rem;

    box-sizing: border-box;
    font-size: 62.5%; /* sets the base font to 10px for easier math. 1.6rem = 16px */
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    background: black;
    font-family: 'Helvetica Neue Local', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 40px;
    color: #E2E2E2;
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 1.3;
  }

  footer{
    margin-top: 15vh;
  }

  .widget-title{
    text-transform: uppercase;
    color: var(--brandFour);
    margin: 0;
    margin-bottom: 2.5rem;
    font-size: 1.8rem;
    line-height: 1.2;
  }

  a{
    text-decoration: none;
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

import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { createGlobalStyle } from 'styled-components';

// TODO: No estamos haciendo un Reset Global.
const GlobalStyle = createGlobalStyle`

  --breakpoints: (
    xs: 360px,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px,
    xxxl: 1600px
  );

  @font-face {
    font-family: 'Helvetica Neue Local';
    src: url('/static/HelveticaNeue-Light.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue Local';
    src: url('/static/HelveticaNeue.woff2') format('woff2');
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

    --linkColor: var(--brandPrimary);
    --transitionTime: .3s;
    --text-size: 1.6rem;

    // Breakpoints
    --sm: 576px;
    --md: 990px;
    --lg: 1430px;

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
    color: var(--brandPrimary);
    font-size: var(--text-size);
    line-height: 1.2;
    letter-spacing: .08rem;
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
    letter-spacing: 0;
  }

  a{
    color: var(---brandSecondary);
    text-decoration: none;
  }

  .link-line{
    position: relative;
    text-decoration: none;

    &:after{
      content: '';
      background: currentColor;
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 0;
      transition: all var(---transitionTime) ease-in-out;
    }

    &:hover{
      &:after{
        width: 100%;
      }
    }
  }
`;

export default function Page({ children }:any) {

  return (
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
  )
}

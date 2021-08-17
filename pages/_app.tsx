import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';

// TODO: No estamos haciendo un Reset Global.
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Helvetica Neue Local';
    src: url('/static/HelveticaNeue-Light.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Helvetica Neue Local';
    src: url('/static/HelveticaNeue.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
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
    padding: 30px 20px;
    color: var(--brandPrimary);
    font-size: var(--text-size);
    line-height: 1.2;
    letter-spacing: .08rem;
    margin: 0;
  }

  footer{
    margin-top: 15vh;
  }

  .secondary-title{
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
    background-size: 0;

     &:hover{
      background: linear-gradient(var(--brandFour), var(--brandFour)) bottom/0% 2px no-repeat;
      background-size: 100% 2px;
      transition: background-size .3s;
      transition-duration: .3s;
    }
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

  @media (min-width: 576px){
    body{
      padding: 40px;
    }
  }
`;

function App({ Component, pageProps, router }: AppProps) {

  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter initial={false} >
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default App;

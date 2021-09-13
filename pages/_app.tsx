import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import Page from '../components/Page';


const GlobalStyle = createGlobalStyle`

  /* ! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}

  /* @font-face {
    font-family: 'Helvetica Neue Local';
    src: local('Helvetica Neue'), url('/static/HelveticaNeue-Light.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    unicode-range: U+000-5FF;
  }

  @font-face {
    font-family: 'Helvetica Neue Local';
    src: local('Helvetica Neue'), url('/static/HelveticaNeue.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    unicode-range: U+000-5FF;
  } */

  html {
    --brandPrimary:   #E2E2E2;
    --brandSecondary: #000000;
    --brandTertiary:  #B4B4B4;
    --brandFour:      #4E4E4E;
    --brandWhite:       white;
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

  body{
    background: var(--bgPrimary);
    font-family: 'neue-haas-grotesk-display', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 30px 20px;
    color: var(--brandPrimary);
    font-size: var(--text-size);
    line-height: 1.2;
    letter-spacing: .09rem;
    margin: 0;
  }

  footer{
    margin-top: 12vh;
  }

  .btn{
    color: var(--brandPrimary);
    background-color: var(--bgPrimary);
    font-size: 1.6rem;
    padding: 1rem 2rem;

    &:hover{
      color:var(--brandSecondary);
      background-color: var(--bgSecondary);
    }

    &--secondary{
      color:var(--brandSecondary);
      background-color: var(--bgSecondary);

      &:hover{
        color:var(--brandPrimary);
        background-color: var(--bgPrimary);
      }
    }
  }

  .cookie-btn{
    color: var(--brandPrimary) !important;
    background-color: var(--bgPrimary) !important;
    font-size: 1.6rem !important;
    padding: 1rem 2rem !important;
    transition: all .3s ease-in-out;

    &:hover{
      color:var(--brandSecondary) !important;
      background-color: var(--bgSecondary) !important;
    }
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
    color: var(---brandWhite);
    text-decoration: none;
    padding-bottom: 0.5rem;
    transition-duration: .3s;
    transition-delay: 0.1;

    &:hover{
      color: var(--brandFour);
      transition-duration: .3s;
      transition-delay: 0.1;
    }
  }

  p{
    margin-bottom: 2.5rem;
  }

  p:last-child{
    margin-bottom: 0
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

  @media (min-width: 790px){
    body{
      padding: 40px;
    }
  }

  #charge-animation-block{
      display: none;
      opacity: 0;
      visibility: hidden;
  }

  body.started{
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
  }
  #charge-animation-block.started{
    color: white;
    display: block;
    height: 100%;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    padding: 3rem 2rem;
    background: black;
    z-index: 99999999;
    overflow: hidden;
    opacity: 1;
    visibility: visible;

    @media (min-width: 768px){
      padding: 4rem;
    }

    .charge-animation-content{
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

function App({ Component, pageProps, router }: AppProps) {

  const [loadedPages, setLoadedPage]:any = useState([]);
  useEffect( () => {
    var visited = false;

    loadedPages.forEach((page:any ) =>{
      if(page === Component.name){
        visited = true;
      }
    });

    var chargeAnimationBlock = document.getElementById('charge-animation-block');
    var body = document.getElementsByTagName('body')[0];
    var chargeNumber = document.getElementsByClassName('charge-number')[0];

    if(!visited){
      setLoadedPage( [...loadedPages, Component.name] );
      console.log("Página cargada por primera vez");
      chargeAnimationBlock?.classList.add('started');
      body?.classList.add('started');

    }

    if(visited){
      console.log("Página cargada en caché");
    }

    // Increment percentage number
    for (let index = 0; index < 101; index++) {
      setTimeout(()=>{
        chargeNumber = document.getElementsByClassName('charge-number')[0];
        chargeNumber.innerHTML = `${index}`;
      }, 10);
    }

    setTimeout( () => {
      // Remove classes that active the animation
      chargeAnimationBlock?.classList.remove('started');
      body?.classList.remove('started');
      chargeAnimationBlock?.classList.add('invisible');
    }, 1000);


  });

  useEffect(() => {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_KEY ? process.env.NEXT_PUBLIC_GTM_KEY : '' });
  }, []);

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

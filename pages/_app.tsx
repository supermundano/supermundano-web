import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from 'next/dist/pages/_app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async function ({ Component, ctx }:any) {
  let pageProps = {};
  console.log(Component.getInitialProps);
  
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;

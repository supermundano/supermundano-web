import type { AppProps } from 'next/app'
import App from 'next/dist/pages/_app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;

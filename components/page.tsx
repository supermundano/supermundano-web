import Head from 'next/head'
import Header from './header'
import Footer from './footer'


export default function Page({ children }:any) {

  return (
    <>
      <Head>
        <title>Supermundano</title>
        <meta name="description" content="Creative Brands in Context" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}

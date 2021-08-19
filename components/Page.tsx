import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'


export default function Page({ children }:any) {
  return (
    <>
    <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: .3
          }
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3
          }
        }}
        transition={{ type: 'linear' }}
      >
      <Head>
        <title>Supermundano</title>
        <meta name="description" content="Creative Brands in Context" />
        <link rel="icon" href="/favicon.ico" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag(){
                dataLayer.push(arguments);
              }

              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',
                {
                  page_path: window.location.pathname,
                }
              );
            `,
          }}
        />
      </Head>
      <Header/>
        <main>{children}</main>
      <Footer/>
      </motion.div>
    </>
  )
}

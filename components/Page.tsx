import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'

import CookieConsent from "react-cookie-consent";
import Link from 'next/link'

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
        <title>Blavet</title>
        <meta name="description" content="Creative Brands in Context" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uum7jsn.css"></link>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKB783L');`}}></script>
      </Head>
      <Header/>
        <main>{children}</main>
      <Footer/>


    <CookieConsent
      location="bottom"
      buttonText="I agree"
      buttonClasses="cookie-btn"
      cookieName="accept-blavet-cookies"
      sameSite="strict"
      style={{ background: "#ffffffee", color: "#000", maxWidth: "380px", right: "0", left: "auto", padding: '2rem' }}
      expires={150}
    >
      <p>We use cookies on our website to give you the most relevant experience by remembering your preferences and visits. By clicking &quot;I agree&quot;, you agree to the use of all cookies. </p>

      <p>You can get more info in our <Link href="/cookies"><a>cookies policy</a></Link></p>
    </CookieConsent>

    </motion.div>
    </>
  )
}

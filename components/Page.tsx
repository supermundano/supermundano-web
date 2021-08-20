import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'

import CookieConsent, { Cookies } from "react-cookie-consent";
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
        <title>Supermundano</title>
        <meta name="description" content="Creative Brands in Context" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <main>{children}</main>
      <Footer/>

      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="accept-supermundano-cookies"
        sameSite="strict"
        style={{ background: "#ffffffee", color: "#000", maxWidth: "380px", right: "0", left: "auto", padding: '2rem' }}
        buttonStyle={{ color: "#ffffff", backgroundColor: "#000000", fontSize: "1.6rem", padding: "1rem 2rem" }}
        expires={150}
      >
        <p>We use cookies on our website to give you the most relevant experience by remembering your preferences and visits. By clicking &quot;I agree&quot;, you agree to the use of ALL cookies. </p>

        <p>You can get more info in our <Link href="/cookie-policy"><a>cookies policy</a></Link></p>
      </CookieConsent>


      </motion.div>
    </>
  )
}

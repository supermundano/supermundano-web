import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { lazy, Suspense } from 'react';

// import CookieConsent from "react-cookie-consent";
// const CookieConsent = lazy(() => import('../node_modules/react-cookie-consent/build/index'));
const CookieConsent = dynamic(() => import('../node_modules/react-cookie-consent/build/index'));

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
        <link rel="preconnect" href="https://www.googletagmanager.com"></link>
        <link rel="preconnect" href="https://blavetstudio.com/"></link>
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

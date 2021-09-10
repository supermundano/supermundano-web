import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'
import TagManager from 'react-gtm-module';

import CookieConsent, { Cookies } from "react-cookie-consent";
import Link from 'next/link'

export default function Page({ children }:any) {
  if (typeof window !== 'undefined') {
    var chargeAnimationBlock = document.getElementById('charge-animation-block');
    var body = document.getElementsByTagName('body')[0];
    var chargeNumber = document.getElementsByClassName('charge-number')[0];
    setTimeout(() => {
      // Remove classes that active the animation
      chargeAnimationBlock?.classList.remove('started');
      body?.classList.remove('started');
    }, 1000);

    // Increment percentage number
    for (let index = 0; index < 101; index++) {
      setTimeout(()=>{
        chargeNumber.innerHTML = `${index}`;
      }, 10);

    }
  }

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
      </Head>
      <Header/>
        <div id="charge-animation-block">
          <div className="charge-animation-wrap">
            <p className="charge-animation-content"><span className="charge-number">0</span>%</p>
          </div>
        </div>
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
        onAccept={() => {
          TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_KEY ? process.env.NEXT_PUBLIC_GTM_KEY : '' });
        }}
      >
        <p>We use cookies on our website to give you the most relevant experience by remembering your preferences and visits. By clicking &quot;I agree&quot;, you agree to the use of ALL cookies. </p>

        <p>You can get more info in our <Link href="/cookies"><a>cookies policy</a></Link></p>
      </CookieConsent>


      </motion.div>
    </>
  )
}

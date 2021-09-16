import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'

import CookieConsent, { Cookies } from "react-cookie-consent";
import Link from 'next/link'

export default function Page({ children }:any) {

  return (
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
      <title>Blavet - Creative Brands in Context</title>
      <meta name="description" content="We are a full-service design studio specialized in brand strategy, creativity & technology." />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#232323" />
      <meta name="theme-color" content="#000000" />
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
    >
      <p>We use cookies on our website to give you the most relevant experience by remembering your preferences and visits. By clicking &quot;I agree&quot;, you agree to the use of all cookies. </p>

      <p>You can get more info in our <Link href="/cookies"><a>cookies policy</a></Link></p>
    </CookieConsent>

    </motion.div>
  )
}

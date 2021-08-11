import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Supermundano</title>
        <meta name="description" content="Creative Brands in Context" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        
      </main>
      <Footer/>
    </div>
  )
}

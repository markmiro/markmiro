import Head from 'next/head'
import HomeContent from '../components/HomeContent'
import styles from '../styles/Home.module.css'

function HomeContainer({ children }) {
  return <div className={styles.homeContainer}>{children}</div>
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mark Miro</title>
        {/*
          Generated with: https://favicon.io
          Font size: 88
          Font: Montserrat
        */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <HomeContainer>
        <HomeContent />
      </HomeContainer>
      <footer className={styles.footer}>Last updated August 19, 2020</footer>
    </div>
  )
}

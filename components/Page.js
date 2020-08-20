import Head from 'next/head'
import styles from '../styles/Page.module.css'
import Nav from './Nav'
import Spacer from './Spacer'

export default function Page({ title, children }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{title} | Mark Miro</title>
      </Head>
      <Nav />
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <heading>
            <h2>{title}</h2>
          </heading>
          <Spacer size={1} />
          {children}
        </div>
      </section>
    </div>
  )
}

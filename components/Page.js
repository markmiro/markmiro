import Nav from './Nav'
import Head from 'next/head'

export default function Page({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title} | Mark Miro</title>
      </Head>
      <Nav />
      <section>
        <heading>
          <h2>{title}</h2>
        </heading>
      </section>
      {children}
    </div>
  )
}

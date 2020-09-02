import Head from 'next/head'

import content from './_siteContent'

const Head2 = ({ title, children }) => (
  <Head>
    {title ? (
      <title>
        {title} | {content.siteName}
      </title>
    ) : (
      <title>{content.siteName}</title>
    )}
    {/*
      Generated with: https://favicon.io
      Font size: 88
      Font: Montserrat
    */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    {children}
  </Head>
)

export default Head2

// Stolen from: https://github.com/vercel/next.js/blob/master/examples/with-emotion/pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

import MatomoTrackingScript from '../components/MatomoTrackingScript'
import HotJarTrackingScript from '../components/HotJarTrackingScript'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <html>
        <Head>
          <MatomoTrackingScript />
          {/* <!-- Hotjar Tracking Code for markmiro.com --> */}
          {/* <HotJarTrackingScript hjid={1997678} /> */}
          {/* <!-- Hotjar Tracking Code for https://markmiro.markmiro.vercel.app --> */}
          <HotJarTrackingScript hjid={1997756} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

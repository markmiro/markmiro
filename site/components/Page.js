import Head from 'next/head'
import { css } from '@emotion/core'

import theme from './theme'
import Nav from './Nav'
import Spacer from './Spacer'
import Heading from './Heading'
import Footer from './Footer'
import Vr from './Vr'
import content from './_siteContent'

const page = css`
  display: flex;
  @media ${theme.mediaQueries.mobileAndBelow} {
    flex-direction: column;
  }
  min-height: 100vh;
`

const contentCss = css`
  flex-grow: 1;
  padding: ${theme.pagePadding};
  display: flex;
  @media ${theme.mediaQueries.mobileAndAbove} {
    justify-content: center;
  }
`

const contentInnerCss = css`
  width: 100%;
  max-width: ${theme.measure[1]};
`

export default function Page({ title, children }) {
  return (
    <>
      <div css={page}>
        <Head>
          <title>
            {title} | {content.siteName}
          </title>
        </Head>
        <Nav />
        <Vr />
        <section css={contentCss}>
          <div css={contentInnerCss}>
            <div
              css={css`
                margin-top: -3px; /* Visual adjustment to align with top of nav */
                margin-bottom: -3px; /* Visual adjustment so bottom space also looks more even */
                letter-spacing: ${theme.letterSpacings[-1]};
              `}
            >
              <Heading>{title}</Heading>
            </div>
            <Spacer size={5} />
            {children}
            <Spacer size={9} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

import Head from 'next/head'
import { css } from '@emotion/core'

import theme from './theme'
import Nav from './Nav'
import Spacer from './Spacer'
import Heading from './Heading'
import Button from './Button'

const page = css`
  display: flex;
  @media ${theme.mediaQueries.mobileAndBelow} {
    flex-direction: column;
  }
  min-height: 100vh;
`

const content = css`
  flex-grow: 1;
  padding: ${theme.pagePadding};
  display: flex;
  justify-content: center;
`

const contentInner = css`
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
        <section css={content}>
          <div css={contentInner}>
            <div
              css={css`
                margin-top: -6px; /* Visual adjustment to align with top of nav */
                margin-bottom: -6px; /* Visual adjustment so bottom space also looks more even */
                opacity: 0.1;
                letter-spacing: -2px;
              `}
            >
              <Heading>{title}</Heading>
            </div>
            <Spacer size={5} />
            {children}
          </div>
        </section>
      </div>
      {/* Spacer below */}
      <Spacer size={7} />
      <footer style={{ padding: theme.space[4], textAlign: 'right' }}>
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Scroll to Top
        </Button>
      </footer>
    </>
  )
}

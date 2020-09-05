import { css } from '@emotion/core'

import theme from './theme'
import Nav from './Nav'
import Spacer from './Spacer'
import Heading from './Heading'
import Footer from './Footer'
import Vr from './Vr'
import Head2 from './Head2'

const page = css`
  display: flex;
  @media ${theme.mediaQueries.mobileAndBelow} {
    flex-direction: column;
    align-items: center;
  }
  min-height: 100vh;
`

const contentCss = css`
  width: 100%;
  padding: 0 ${theme.pagePadding};
  display: flex;
  justify-content: center;
`

const contentInnerCss = css`
  width: 100%;
  max-width: ${theme.measure[1]};
`

export default function Page({ title, children }) {
  return (
    <>
      <div css={page}>
        <Head2 title={title} />
        <Nav />
        <Vr />
        <section css={contentCss}>
          <div css={contentInnerCss}>
            <Spacer size={7} />
            <div
              css={css`
                margin-top: -1.5px; /* Visual adjustment to align with top of nav */
                letter-spacing: ${theme.letterSpacings[-1]};
              `}
            >
              <Heading>{title}</Heading>
            </div>
            <Spacer size={7} />
            {children}
            <Spacer size={9} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

import { css } from '@emotion/react'

import Footer from './Footer'
import Head2 from './Head2'
import Nav from './Nav'
import theme from './theme'
import Vr from './Vr'

const page = css`
  display: flex;
  @media ${theme.mediaQueries.mobileAndBelow} {
    flex-direction: column;
  }
  flex-grow: 1;
`

function OuterShell({ children }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <div css={page}>{children}</div>
      <Footer />
    </div>
  )
}

export default function PageShell({ title, children }) {
  return (
    <OuterShell>
      <Head2 title={title} />
      <Nav />
      <Vr />
      {children}
    </OuterShell>
  )
}

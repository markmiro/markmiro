import { css } from '@emotion/react'

import { PageHeading } from './PageHeading'
import PageShell from './PageShell'
import SlideFadeUp from './SlideFadeUp'
import Spacer from './Spacer'
import theme from './theme'

const contentCss = css`
  width: 100%;
  padding: 0 ${theme.pagePadding};
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const contentInnerCss = css`
  width: 100%;
  max-width: ${theme.measure[1]};
`

export default function Page({ title, children }) {
  return (
    <PageShell title={title}>
      <section css={contentCss}>
        <div css={contentInnerCss}>
          <Spacer size={7} />
          <PageHeading>{title}</PageHeading>
          <Spacer size={7} />
          <SlideFadeUp>{children}</SlideFadeUp>
          <Spacer size={9} />
        </div>
      </section>
    </PageShell>
  )
}

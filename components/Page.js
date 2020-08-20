import Head from 'next/head'
import { css } from 'linaria'

import theme from './theme'
import Nav from './Nav'
import Spacer from './Spacer'

const page = css`
  display: flex;
  align-items: flex-start;
  @media ${theme.mediaQueryies.mobileAndBelow} {
    flex-direction: column;
  }
`

const content = css`
  flex-grow: 1;
  padding: calc(${theme.space[0]} + 3vw);
  display: flex;
  justify-content: center;
`

const contentInner = css`
  max-width: ${theme.measure[0]};
`

export default function Page({ title, children }) {
  return (
    <div className={page}>
      <Head>
        <title>{title} | Mark Miro</title>
      </Head>
      <Nav />
      <section className={content}>
        <div className={contentInner}>
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

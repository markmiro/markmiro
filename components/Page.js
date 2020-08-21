import Head from 'next/head'
import { css } from 'linaria'

import theme from './theme'
import Nav from './Nav'
import Spacer from './Spacer'
import Heading from './Heading'

const page = css`
  display: flex;
  align-items: flex-start;
  @media ${theme.mediaQueryies.mobileAndBelow} {
    flex-direction: column;
  }
`

const content = css`
  flex-grow: 1;
  padding: calc(${theme.space[0]} + 5vw);
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
          <Heading
            style={{
              borderBottom: '1px solid',
            }}
          >
            {title}
          </Heading>
          <Spacer size={4} />
          {children}
        </div>
      </section>
    </div>
  )
}

import Head from 'next/head'
import { css } from 'linaria'

import theme from './theme'
import Nav from './Nav'
import Spacer from './Spacer'
import Heading from './Heading'
import Button from './Button'

const page = css`
  display: flex;
  align-items: flex-start;
  @media ${theme.mediaQueryies.mobileAndBelow} {
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
  max-width: ${theme.measure[0]};
`

export default function Page({ title, children }) {
  return (
    <>
      <div className={page}>
        <Head>
          <title>{title} | Mark Miro</title>
        </Head>
        <Nav />
        <section className={content}>
          <div className={contentInner}>
            <Heading
              style={{
                fontWeight: theme.fontWeights[2],
                paddingBottom: 6,
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
      <footer style={{ padding: theme.space[4] }}>
        <Button
          onClick={() => window.scrollTo({ top: 0 })}
          style={{ width: '100%' }}
        >
          Scroll to Top
        </Button>
      </footer>
    </>
  )
}

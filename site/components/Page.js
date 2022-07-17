import React from 'react'
import { css } from '@emotion/react'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

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
  }
  flex-grow: 1;
`

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
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <div css={page}>
        <Head2 title={title} />
        <SkipNavLink
          css={css`
            z-index: 999;
            padding: ${theme.space[2]};
            background: white;
            position: absolute;
            top: -100%;
            color: ${theme.colors.blue};
            :focus {
              position: fixed;
              top: 0;
              left: 0;
            }
          `}
        />
        <Nav />
        <Vr />
        <section css={contentCss}>
          <SkipNavContent />
          <div css={contentInnerCss}>
            <Spacer size={7} />
            <div
              css={css`
                margin-top: -1.5px; /* Visual adjustment to align with top of nav */
                letter-spacing: ${theme.letterSpacings[-1]};
              `}
            >
              <Heading
                css={css`
                  padding: 0 2px;
                  width: max-content;
                  position: relative;
                  @keyframes appear {
                    from {
                      opacity: 0;
                      transform: scaleX(0);
                    }
                    to {
                      opacity: 1;
                      transform: scaleX(1);
                    }
                  }
                  ::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    backdrop-filter: invert(1) hue-rotate(180deg);

                    transition: transform 150ms ease-out;
                    transform-origin: left;
                    animation: appear 150ms ease-out;
                  }
                `}
              >
                {title}
              </Heading>
            </div>
            <Spacer size={7} />
            {children}
            <Spacer size={9} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

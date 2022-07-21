import { css } from '@emotion/react'
import Heading from './Heading'
import theme from './theme'

const headingCss = css`
  letter-spacing: ${theme.letterSpacings[-1]};
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
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    backdrop-filter: invert(1) hue-rotate(180deg);

    transform: scaleX(0);
    transform-origin: left;
    animation: appear 100ms ease-out forwards;
    animation-delay: 150ms;
  }
`

export function PageHeading({ children }) {
  return <Heading css={headingCss}>{children}</Heading>
}

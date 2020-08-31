import { modularScale, setLightness } from 'polished'
import { css } from '@emotion/core'

const ms = modularScale

const round = (n) => Math.round(n * 100) / 100

const space = [
  round(ms(0, 8)) + 'px',
  round(ms(1, 8)) + 'px',
  round(ms(2, 8)) + 'px',
  round(ms(3, 8)) + 'px',
  round(ms(4, 8)) + 'px',
  round(ms(5, 8)) + 'px',
  round(ms(6, 8)) + 'px',
  round(ms(7, 8)) + 'px',
  round(ms(8, 8)) + 'px',
  round(ms(9, 8)) + 'px',
]

const fontSizes = {
  '-2': round(ms(-2, 1)) + 'em',
  '-1': round(ms(-1, 1)) + 'em',
  '0': round(ms(0, 1)) + 'em',
  '1': round(ms(1, 1)) + 'em',
  '2': round(ms(2, 1)) + 'em',
  '3': round(ms(3, 1)) + 'em',
  '4': round(ms(4, 1)) + 'em',
  '5': round(ms(5, 1)) + 'em',
  '6': round(ms(6, 1)) + 'em',
  '7': round(ms(7, 1)) + 'em',
}

export const colorsCss = css`
  :root {
    --blue: ${setLightness(0.5, '#1b3daa')};
    --red: ${setLightness(0.5, '#f34228')};
    --c0: hsl(0deg, 0%, 100%);
    --c1: hsl(0deg, 0%, 90%);
    --c2: hsl(0deg, 0%, 70%);
    --c3: hsl(0deg, 0%, 60%);
    --c4: hsl(0deg, 0%, 0%);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --blue: ${setLightness(0.8, '#1b3daa')};
      --red: ${setLightness(0.8, '#f34228')};
      --c4: hsl(0deg, 0%, 100%);
      --c3: hsl(0deg, 0%, 60%);
      --c2: hsl(0deg, 0%, 40%);
      --c1: hsl(0deg, 0%, 30%);
      --c0: hsl(0deg, 0%, 0%);
    }
  }
`

// Based on: https://styled-system.com/theme-specification
export default {
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif",
  },
  measure: {
    '0': `calc(${fontSizes[0]} * 30)`,
    '1': `calc(${fontSizes[0]} * 40)`,
    navColumnText: `calc(${fontSizes[0]} * 13)`,
  },
  fontSizes,
  space,
  letterSpacings: {
    '-1': '-0.02em',
    0: 0,
    1: '0.07em',
  },
  lineHeights: ['1.3'],
  fontWeights: ['300', '400', '600'],
  mediaQueries: {
    // Using this format to work with `react-responsive` package
    // EX: useMediaQuery({ query: '(min-device-width: 1824px)' })
    mobileAndBelow: `(max-width: ${900}px)`,
    mobileAndAbove: `(min-width: ${900 + 1}px)`,
    experiments: {
      mobileAndBelow: `(max-width: ${550}px)`,
      mobileAndAbove: `(min-width: ${550 + 1}px)`,
    },
  },
  colors: {
    blue: 'var(--blue)',
    red: 'var(--red)',
    neutral: {
      lightest: 'var(--c0)',
      light: 'var(--c1)',
      medium: 'var(--c2)',
      dark: 'var(--c3)',
      darkest: 'var(--c4)',
    },
  },
  pagePadding: space[4],
}

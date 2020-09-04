import { modularScale, setLightness } from 'polished'
import { css } from '@emotion/core'

const ms = modularScale

const round = (n) => Math.round(n * 100) / 100

const space = [
  round(ms(0, 0.5)) + 'em',
  round(ms(1, 0.5)) + 'em',
  round(ms(2, 0.5)) + 'em',
  round(ms(3, 0.5)) + 'em',
  round(ms(4, 0.5)) + 'em',
  round(ms(5, 0.5)) + 'em',
  round(ms(6, 0.5)) + 'em',
  round(ms(7, 0.5)) + 'em',
  round(ms(8, 0.5)) + 'em',
  round(ms(9, 0.5)) + 'em',
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

/*
The structure of colors from c0 to c8
- 0 means 0% contrast
- 8 means 100% contrast
- 'c' is short for 'contrast'
- Easy to scale up and down number of colors and divide by 2. Some options
  * c0, c8
  * c0, c4, c8
  * c0, c2, c4, c6, c8
  * c0, c1, c2, ... , c8
  * (c0 to c8 should be enough, right?)
*/
export const colorsCss = css`
  :root {
    --blue: ${setLightness(0.5, '#2755bf')};
    --red: ${setLightness(0.5, '#f34228')};

    --c0: hsl(0deg, 0%, 100%);
    --c2: hsl(0deg, 0%, 90%); /* start */
    --c4: hsl(0deg, 0%, 80%); /* 10% diff */
    --c6: hsl(0deg, 0%, 60%); /* 20% diff */
    --c8: hsl(0deg, 0%, 0%); /* 40% diff */
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --blue: ${setLightness(0.8, '#2755bf')};
      --red: ${setLightness(0.8, '#f34228')};

      --c0: hsl(0deg, 0%, 0%);
      --c2: hsl(0deg, 0%, 30%); /* start */
      --c4: hsl(0deg, 0%, 40%); /* 10% diff */
      --c6: hsl(0deg, 0%, 60%); /* 20% diff */
      --c8: hsl(0deg, 0%, 100%); /* 40% diff */
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
  lineHeights: ['1.43'],
  fontWeights: ['300', '400', '700'],
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
    c0: 'var(--c0)',
    c2: 'var(--c2)',
    c4: 'var(--c4)',
    c6: 'var(--c6)',
    c8: 'var(--c8)',
  },
  pagePadding: space[4],
}

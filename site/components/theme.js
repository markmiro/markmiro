import { modularScale } from 'polished'

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

const breakpoints = {
  mobile: 767,
}

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
    '-1': '-0.03em',
    0: 0,
    1: '0.07em',
  },
  lineHeights: ['1.3'],
  fontWeights: ['300', '400', '600'],
  mediaQueries: {
    // Using this format to work with `react-responsive` package
    // EX: useMediaQuery({ query: '(min-device-width: 1824px)' })
    mobileAndBelow: `(max-width: ${breakpoints.mobile}px)`,
    mobileAndAbove: `(min-width: ${breakpoints.mobile + 1}px)`,
  },
  colors: {
    blue: '#1B3DAA',
    red: '#F34228',
    neutral: {
      lightest: '#fff',
      light: '#ddd',
      medium: '#bbb',
      dark: '#999',
      darkest: '#000',
    },
  },
  pagePadding: space[4],
}

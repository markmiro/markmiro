import { modularScale } from 'polished'

const ms = modularScale

const space = [
  ms(0, '8px'),
  ms(1, '8px'),
  ms(2, '8px'),
  ms(3, '8px'),
  ms(4, '8px'),
  ms(5, '8px'),
  ms(6, '8px'),
  ms(7, '8px'),
  ms(8, '8px'),
]

const breakpoints = {
  mobile: '767px',
}

const fontSizes = {
  '-2': ms(-2, '1em'),
  '-1': ms(-1, '1em'),
  '0': ms(0, '1em'),
  '1': ms(1, '1em'),
  '2': ms(2, '1em'),
  '3': ms(3, '1em'),
  '4': ms(4, '1em'),
  '5': ms(5, '1em'),
  '6': ms(6, '1em'),
  '7': ms(7, '1em'),
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
    navColumnText: `calc(${fontSizes[0]} * 12)`,
  },
  fontSizes,
  space,
  letterSpacings: [0, '0.07em'],
  lineHeights: ['1.3'],
  fontWeights: ['300', '400', '600'],
  breakpoints,
  mediaQueries: {
    // Using this format to work with `react-responsive` package
    // EX: useMediaQuery({ query: '(min-device-width: 1824px)' })
    mobileAndBelow: `(max-width: ${breakpoints.mobile})`,
    mobileAndAbove: `(min-width: ${breakpoints.mobile})`,
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

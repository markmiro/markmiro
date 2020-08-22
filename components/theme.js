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
]

const breakpoints = {
  mobile: '767px',
}

const fontSizes = {
  '-2': ms(-2, '16px'),
  '-1': ms(-1, '16px'),
  '0': ms(0, '16px'),
  '1': ms(1, '16px'),
  '2': ms(2, '16px'),
  '3': ms(3, '16px'),
  '4': ms(4, '16px'),
  '5': ms(5, '16px'),
  '6': ms(6, '16px'),
  '7': ms(7, '16px'),
}

// Based on: https://styled-system.com/theme-specification
export default {
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif",
  },
  measure: {
    '0': `calc(${fontSizes[0]} * 38)`,
    navColumnText: `calc(${fontSizes[0]} * 12)`,
  },
  fontSizes,
  space,
  letterSpacings: [0, '1.2px'],
  lineHeights: ['1.25', '1.5'],
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

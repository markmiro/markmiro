import { modularScale } from 'polished'

const breakpoints = {
  mobile: '767px',
}

const fontSizes = {
  '-2': modularScale(-2, '16px'),
  '-1': modularScale(-1, '16px'),
  '0': modularScale(0, '16px'),
  '1': modularScale(1, '16px'),
  '2': modularScale(2, '16px'),
  '3': modularScale(3, '16px'),
  '4': modularScale(4, '16px'),
  '5': modularScale(5, '16px'),
  '6': modularScale(6, '16px'),
  '7': modularScale(7, '16px'),
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
  space: [
    modularScale(0, '8px'),
    modularScale(1, '8px'),
    modularScale(2, '8px'),
    modularScale(3, '8px'),
    modularScale(4, '8px'),
    modularScale(5, '8px'),
  ],
  letterSpacings: [0, '1.2px'],
  lineHeights: ['1.25', '1.5'],
  fontWeights: ['300', '400', '600'],
  breakpoints,
  mediaQueryies: {
    // Using this format to work with `react-responsive` package
    // EX: useMediaQuery({ query: '(min-device-width: 1824px)' })
    mobileAndBelow: `(max-width: ${breakpoints.mobile})`,
    mobileAndAbove: `(min-width: ${breakpoints.mobile})`,
  },
  colors: {
    red: '#F34228',
    neutral: {
      lightest: '#fff',
      light: '#ddd',
      dark: '#999',
      darkest: '#000',
    },
  },
}

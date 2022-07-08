import styled from '@emotion/styled'
import { createContext, useContext } from 'react'
import theme from './theme'

export const HeadingSizeContext = createContext(1)

export function Section({ children }) {
  const headingSize = useContext(HeadingSizeContext)

  return (
    <HeadingSizeContext.Provider value={headingSize + 1}>
      {children}
    </HeadingSizeContext.Provider>
  )
}

const HeadingThing = styled.div`
  font-weight: ${theme.fontWeights[2]};
  font-size: ${(props) => theme.fontSizes[props.index]};
  line-height: ${theme.lineHeights.heading};
`

function Heading({ children, ...props }) {
  const headingSize = useContext(HeadingSizeContext)

  const index = 4 - headingSize

  return (
    <HeadingThing as={`h${headingSize + 1}`} index={index} {...props}>
      {children}
    </HeadingThing>
  )
}

// Overline is an all-caps and small heading
// https://material.io/design/typography/the-type-system.html
export const Overline = styled.header`
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacings[1]};
  font-weight: ${theme.fontWeights[1]};
  font-size: ${theme.fontSizes[-2]};
`

export default Heading

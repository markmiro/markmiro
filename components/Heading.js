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

const HeadingThing = styled.header`
  font-weight: ${theme.fontWeights[2]};
  font-size: ${(props) => theme.fontSizes[props.index - 2]};

  @media ${theme.mediaQueries.mobileAndAbove} {
    font-size: ${(props) => theme.fontSizes[props.index]};
  }
`

function Heading({ children, style, ...props }) {
  const headingSize = useContext(HeadingSizeContext)

  const index = 6 - headingSize

  if (index === 0) {
    return <Overline {...props}>{children}</Overline>
  }

  if (index < 0) {
    throw new Error("Can't make a heading this small")
  }

  return (
    <HeadingThing as={`h${headingSize}`} index={index} {...props}>
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

import { styled } from 'linaria/react'
import theme from './theme'
import { createContext, useContext } from 'react'

const HeadingSizeContext = createContext(1)

export function Section({ children }) {
  const headingSize = useContext(HeadingSizeContext)

  return (
    <HeadingSizeContext.Provider value={headingSize + 1}>
      {children}
    </HeadingSizeContext.Provider>
  )
}

function Heading({ children, style, ...props }) {
  const headingSize = useContext(HeadingSizeContext)

  const index = 6 - headingSize

  if (index === 0) {
    return <Overline {...props}>{children}</Overline>
  }

  if (index < 0) {
    throw new Error("Can't make a heading this small")
  }

  return React.createElement(
    'h' + headingSize,
    {
      style: {
        fontSize: theme.fontSizes[index],
        // fontSize: stripUnit(theme.fontSizes[index]) / 11 + 'vw',
        // fontWeight: theme.fontWeights[2],
        ...style,
      },
      ...props,
    },
    children
  )
}

// Overline is an all-caps and small heading
// https://material.io/design/typography/the-type-system.html
export const Overline = styled.heading`
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacings[1]};
  font-weight: ${theme.fontWeights[1]};
  font-size: ${theme.fontSizes[-2]};
`

export default Heading

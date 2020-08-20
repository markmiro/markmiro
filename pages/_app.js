import { styled } from 'linaria/react'
import theme from '../components/theme'

const GlobalStyles = styled.div`
  :global() {
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes[0]};
      font-weight: ${theme.fontWeights[0]};
    }

    a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    * {
      margin: 0;
      box-sizing: border-box;
    }
  }
`

function App({ Component, pageProps }) {
  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  )
}

export default App

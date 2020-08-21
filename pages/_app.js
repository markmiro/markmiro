import { styled } from 'linaria/react'
import theme from '../components/theme'

const GlobalStyles = styled.div`
  :global() {
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${theme.fonts.body};
    }

    a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    * {
      margin: 0;
      padding: 0;
      font-size: ${theme.fontSizes[0]};
      box-sizing: border-box;
      font-weight: normal;
      line-height: 1;
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

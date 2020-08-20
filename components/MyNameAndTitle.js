import { css } from 'linaria'
import theme from './theme'
import Link from 'next/link'

const name = css`
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights[1]};
`

const title = css`
  font-size: ${theme.fontSizes[0]};
  display: block;
`

const MyNameAndTitle = () => (
  <Link href="/">
    <a style={{ textDecoration: 'none', lineHeight: 1 }}>
      <h1>
        <div className={name}>Mark Miro</div>
        <small className={title}>UI Engineer</small>
      </h1>
    </a>
  </Link>
)

export default MyNameAndTitle

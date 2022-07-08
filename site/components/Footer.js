import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import updated from '../prebuild/date-updated.json'
import Button from './Button'
import Spacer from './Spacer'
import theme from './theme'

const FooterBox = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${theme.colors.c2};
  padding: ${theme.pagePadding};
  font-weight: ${theme.fontWeights[0]};
  font-size: ${theme.fontSizes[-1]};
`

const Footer = () => {
  const [dateString, setDateString] = useState('Loading...')

  useEffect(() => setDateString(new Date(updated).toLocaleString()))

  return (
    <FooterBox>
      <span
        css={css`
          color: ${theme.colors.c4};
        `}
      >
        Updated {dateString}
      </span>
      <Spacer size={1} />
      <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Scroll to Top ⤴
      </Button>
    </FooterBox>
  )
}

export default Footer

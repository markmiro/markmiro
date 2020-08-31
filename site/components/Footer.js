import styled from '@emotion/styled'

import updated from '../prebuild/date-updated.json'
import Spacer from './Spacer'
import theme from './theme'
import Button from './Button'

const FooterBox = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${theme.colors.neutral.light};
  padding: ${theme.pagePadding};
  font-weight: ${theme.fontWeights[0]};
  font-size: ${theme.fontSizes[-1]};
`

const Footer = () => (
  <FooterBox>
    Last updated {new Date(updated).toLocaleString()}
    <Spacer size={1} />
    <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      Scroll to Top ⤴
    </Button>
  </FooterBox>
)

export default Footer

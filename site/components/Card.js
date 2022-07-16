import styled from '@emotion/styled'
import theme from './theme'

const Card = styled.div`
  border: 1px solid ${theme.colors.c2};

  transition: border 200ms ease-out;
  &:hover {
    border-color: ${theme.colors.c6};
  }
`

export const CardBody = styled.div`
  padding: ${theme.space[2]};
`

export default Card

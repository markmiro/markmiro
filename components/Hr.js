import { styled } from 'linaria/react'
import theme from './theme'

const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.neutral.light};
`

export default Hr

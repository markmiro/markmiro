// https://mxstbr.com/thoughts/margin
import styled from '@emotion/styled'
import theme from './theme'

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => theme.space[props.space || 0]};
`

export const HStack = styled.div`
  display: flex;
  flex-direction: row;

  gap: ${(props) => theme.space[props.space || 0]};
`

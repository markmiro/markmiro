// https://mxstbr.com/thoughts/margin
import styled from '@emotion/styled'
import theme from './theme'

export const VStack = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: ${(props) => theme.space[props.space || 0]};
  }
  & > *:first-child {
    margin-top: 0;
  }
`

export const HStack = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-left: ${(props) => theme.space[props.space || 0]};
  }
  & > *:first-child {
    margin-left: 0;
  }
`

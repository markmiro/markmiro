import styled from '@emotion/styled'
import theme from './theme'

export const VStack = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${(props) => theme.space[props.space || 0]};
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`

export const HStack = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: ${(props) => theme.space[props.space || 0]};
  }
  & > *:last-child {
    margin-right: 0;
  }
`

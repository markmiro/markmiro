import styled from '@emotion/styled'
import PageShell from '../../components/PageShell'

const Fill = styled.div`
  flex-grow: 1;
  background: #0ff;
  display: grid;
  place-items: center;
  color: black;
`

export default function ShellPage() {
  return (
    <PageShell title="Shell">
      <Fill>Hello</Fill>
    </PageShell>
  )
}

import Page from '../components/Page'

export default function About() {
  return (
    <Page title="About">
      {[...new Array(10)].map((_, i) => (
        <div key={i} style={{ paddingBottom: '2em' }}>
          Irure dolor ipsum pariatur culpa. Quis cillum esse culpa aute eiusmod
          eiusmod fugiat sunt do eiusmod. Eu excepteur cupidatat ipsum nulla
          sunt dolor consectetur enim esse occaecat occaecat fugiat mollit ad.
          Adipisicing amet non aliquip Lorem sit consequat ea. Dolor irure esse
          ad ullamco ad esse eiusmod duis nisi minim sunt aliquip.
        </div>
      ))}
    </Page>
  )
}

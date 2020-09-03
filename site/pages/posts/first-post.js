import Page from '../../components/Page'
import LoremParagraphs from '../../components/LoremParagraphs'

export default function FirstPost() {
  return (
    <Page title="First Post">
      <LoremParagraphs count={2} />
    </Page>
  )
}

import Page from '../../components/Page'
import LoremParagraphs from '../../components/LoremParagraphs'

export default function SecondPost() {
  return (
    <Page title="Second Post">
      <LoremParagraphs count={2} />
    </Page>
  )
}

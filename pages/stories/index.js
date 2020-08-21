import Headings from './headings'
import Linaria from './linaria'
import Theme from './theme'
import Heading, { Section, HeadingSizeContext } from '../../components/Heading'

const Headed = ({ title, children }) => (
  <Section>
    <Heading>{title}</Heading>
    {children}
  </Section>
)

export default function Stories() {
  return (
    <>
      <Headed title="<Headings />">
        <HeadingSizeContext.Provider value={0}>
          <Headings />
        </HeadingSizeContext.Provider>
      </Headed>
      <Headed title="<Linaria />">
        <Linaria />
      </Headed>
      <Headed title="<Theme />">
        <Theme />
      </Headed>
    </>
  )
}

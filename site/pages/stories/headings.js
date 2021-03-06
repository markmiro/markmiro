import Heading, { Section } from '../../components/Heading'
import theme from '../../components/theme'
import { VStack } from '../../components/Stack'
import P from '../../components/P'

const BodyText = () => (
  // <div style={{ color: theme.colors.c6 }}>Body text lorem ipsum</div>
  <P>
    Adipisicing in nulla dolore dolore. Reprehenderit fugiat id nostrud elit
    deserunt sint nisi. Magna anim reprehenderit officia pariatur eiusmod
    consectetur cillum eu ad ipsum do. Id sint qui sit dolore non et
    exercitation elit.
  </P>
)

export default function Headings() {
  return (
    <div style={{ padding: theme.space[5] }}>
      <VStack space={2}>
        <Heading>Heading 1</Heading>
        <BodyText />
        <Section>
          <Heading>Heading 2</Heading>
          <BodyText />
          <Section>
            <Heading>Heading 3</Heading>
            <BodyText />
            <Section>
              <Heading>Heading 4</Heading>
              <BodyText />
              <Section>
                <Heading>Heading 5</Heading>
                <BodyText />
                <Section>
                  <Heading>Heading 6</Heading>
                  <BodyText />
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </VStack>
    </div>
  )
}

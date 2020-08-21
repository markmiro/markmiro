import Heading, { Section } from '../components/Heading'
import theme from '../components/theme'
import { VStack } from '../components/Stack'

const BodyText = () => (
  <div style={{ color: theme.colors.neutral.dark }}>Body text lorem ipsum</div>
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
                  <Section>
                    <Heading>Heading 7</Heading>
                    <BodyText />
                    {/* <Section>
                      <Heading>Heading 8</Heading>
                      <BodyText />
                    </Section> */}
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </VStack>
    </div>
  )
}

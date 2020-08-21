import Page from '../components/Page'
import { VStack, HStack } from '../components/Stack'
import theme from '../components/theme'
import { Section } from '../components/Heading'
import Hr from '../components/Hr'

const MyPortrait = () => (
  <img
    src="/markmiro-portrait-1x.jpg"
    srcSet="/markmiro-portrait-2x.jpg 2x"
    style={{
      width: 150,
    }}
  />
)

export default function About() {
  return (
    <Page title="About">
      <VStack space={3}>
        <HStack space={3} style={{ alignItems: 'flex-start' }}>
          <MyPortrait />
          <VStack>
            <Section>
              <div
                style={{
                  height: 35 /* to align with the dark/light separation line in the background of markmiro-portrait.jpg */,
                }}
              />
              <div>
                <div style={{ fontWeight: theme.fontWeights[2] }}>
                  Mark Miro
                </div>
                <small style={{ fontSize: theme.fontSizes[-1] }}>
                  (legally, my last name is "Mironyuk", but I shortened for the
                  nice-looking domain name)
                </small>
              </div>
              <a href="https://goo.gl/maps/pX9D3Wg7oFmHW3jW8">Sacramento, CA</a>
              <a href="mailto:contact@markmiro.com">contact@markmiro.com</a>
              <a href="/Mark-Miro-Resume-Jan-02-2020.pdf" target="_blank">
                PDF Resume
              </a>
            </Section>
          </VStack>
        </HStack>
        <Hr />
        <div
          style={{
            fontSize: theme.fontSizes[2],
            lineHeight: theme.lineHeights[0],
          }}
        >
          I'm a UI Engineer with a love for React, design systems, and user
          research.
        </div>
      </VStack>
    </Page>
  )
}

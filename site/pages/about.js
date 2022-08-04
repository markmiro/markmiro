import { Section } from '../components/Heading'
import Hr from '../components/Hr'
import MyPortrait from '../components/MyPortrait'
import Page from '../components/Page'
import Spacer from '../components/Spacer'
import { HStack, VStack } from '../components/Stack'
import theme from '../components/theme'
import content from '../components/_siteContent'

export default function About() {
  return (
    <Page title="About">
      <HStack space={3} style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <MyPortrait width="15em" />
        <Section>
          <VStack style={{ alignItems: 'start', maxWidth: '35ch' }}>
            <div>
              <div
                style={{
                  fontSize: theme.fontSizes[1],
                }}
              >
                Mark Miro
              </div>
              <small
                style={{
                  fontSize: theme.fontSizes[-1],
                  color: theme.colors.c6,
                }}
              >
                Legally, my last name is &ldquo;Mironyuk&rdquo;, but I shortened
                for the nice-looking domain name.
              </small>
            </div>
            <a href="mailto:contact@markmiro.com">contact@markmiro.com</a>
            <Spacer size={1} />
            <Hr />
            <Spacer />
            <div
              style={{
                fontSize: theme.fontSizes[0],
                lineHeight: theme.lineHeights[0],
              }}
            >
              {content.siteDescription}
            </div>
          </VStack>
        </Section>
      </HStack>
    </Page>
  )
}

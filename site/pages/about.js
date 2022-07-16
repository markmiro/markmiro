import { css } from '@emotion/react'
import A from '../components/A'
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
        <MyPortrait
          css={css`
              width: 15em;
              ${theme.mediaQueries.mobileAndBelow} {
                
            `}
        />
        <Section>
          <VStack style={{ alignItems: 'start', maxWidth: '35ch' }}>
            <div>
              <div
                style={{
                  fontSize: theme.fontSizes[1],
                  // fontWeight: theme.fontWeights[2],
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
            <a href="/Mark-Miro-Resume-Jan-02-2020.pdf" target="_blank">
              PDF Resume
            </a>
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

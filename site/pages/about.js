import React from 'react'
import Page from '../components/Page'
import { VStack, HStack } from '../components/Stack'
import theme from '../components/theme'
import { Section } from '../components/Heading'
import Hr from '../components/Hr'
import MyPortrait from '../components/MyPortrait'
import A from '../components/A'
import content from '../components/_siteContent'

export default function About() {
  return (
    <Page title="About">
      <VStack space={3}>
        <HStack space={3} style={{ alignItems: 'flex-start' }}>
          <MyPortrait width="10em" />
          <VStack style={{ alignItems: 'start' }}>
            <Section>
              <div
                style={{
                  height:
                    '2.3em' /* to align with the dark/light separation line in the background of markmiro-portrait.jpg */,
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
              <A href="https://goo.gl/maps/pX9D3Wg7oFmHW3jW8">Sacramento, CA</A>
              <A href="mailto:contact@markmiro.com">contact@markmiro.com</A>
              <A href="/Mark-Miro-Resume-Jan-02-2020.pdf" target="_blank">
                PDF Resume
              </A>
            </Section>
          </VStack>
        </HStack>
        <Hr />
        <div
          style={{
            fontSize: theme.fontSizes[0],
            lineHeight: theme.lineHeights[0],
          }}
        >
          {content.siteDescription}
        </div>
      </VStack>
    </Page>
  )
}

import { css } from '@emotion/core'

import Page from '../components/Page'
import LoremParagraphs from '../components/LoremParagraphs'
import { Section } from '../components/Heading'
import { VStack } from '../components/Stack'
import theme from '../components/theme'
import P from '../components/P'
import Spacer from '../components/Spacer'
import Card from '../components/Card'
import Button from '../components/Button'
import content from '../components/_siteContent'

const Project = ({ href, heading, slug, children }) => (
  <Section>
    <Card>
      <VStack space={2}>
        {slug && (
          <img
            src={`/figma-export/${slug}-1x.png`}
            srcSet={`/figma-export/${slug}-2x.png 2x`}
            css={css`
              width: 100%;
              display: block;
            `}
          />
        )}
        <div
          style={{
            fontWeight: theme.fontWeights[2],
          }}
        >
          {heading}
        </div>
        {<P>{children}</P> || <LoremParagraphs count={1} />}
        {href && (
          <div
            css={css`
              text-align: right;
            `}
          >
            <Button
              as="a"
              href={href}
              css={css`
                display: inline-block;
              `}
            >
              View Project
            </Button>
          </div>
        )}
      </VStack>
    </Card>
  </Section>
)

export default function Projects() {
  return (
    <Page title="Projects">
      <VStack space={4}>
        {content.projects.map(({ href, heading, slug, children }) => (
          <Project href={href} heading={heading} slug={slug}>
            {children}
          </Project>
        ))}
      </VStack>
    </Page>
  )
}

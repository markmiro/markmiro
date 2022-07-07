import React from 'react'
import { css } from '@emotion/react'

import Page from '../components/Page'
import LoremParagraphs from '../components/LoremParagraphs'
import { Section } from '../components/Heading'
import { VStack } from '../components/Stack'
import theme from '../components/theme'
import P from '../components/P'
import Card from '../components/Card'
import Button from '../components/Button'
import content from '../components/_siteContent'

const Project = ({ href, heading, slug, children }) => (
  <Section>
    <Card>
      <VStack space={2}>
        {slug && (
          <div
            css={css`
              /* Make ratio 2:1 using padding-bottom */
              width: 100%;
              padding-bottom: 50%;
              position: relative;
              background: ${theme.colors.c1};
            `}
          >
            <img
              src={`/figma-export/${slug}-1x.png`}
              srcSet={`/figma-export/${slug}-2x.png 2x`}
              loading="lazy"
              css={css`
                position: absolute;
                width: 100%;
                border: 1px solid ${theme.colors.c1};
                // box-shadow: 0px 1px 2px #00000022, 0px 2px 5px #00000022;
              `}
            />
          </div>
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
          <Project key={slug} href={href} heading={heading} slug={slug}>
            {children}
          </Project>
        ))}
      </VStack>
    </Page>
  )
}

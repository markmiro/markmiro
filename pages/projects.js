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

const Project = ({ href, heading, slug, children }) => (
  <Section>
    <Card>
      <VStack space={2}>
        {slug && (
          <img
            src={`/${slug}-1x.png`}
            srcSet={`/${slug}-2x.png 2x`}
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
      <VStack space={7}>
        <Project
          href="https://markmiro.com/huet"
          heading="Huet"
          slug="project-huet"
        >
          Library for having the computer pick your exact hex color codes so you
          can say "I want this to be red" and have it look good (accesible).
        </Project>
        <Project
          href="https://markmiro.com/jpeg-text-degrader"
          heading="JPEG Text Degrader"
          slug="project-jpeg-text-degrader"
        >
          What if you take a JPEG image and then compress it again and again and
          again and you get to watch it as it happens. Maybe it'll look like one
          of those timelapses of decaying fruit. That could be something, right?
        </Project>
        {/* <Project heading="Validated">
          An opinionated validation library that takes care of your UX. This
          means the library decides when error messages are shown, so you only
          have to worry about about validation rules.
        </Project> */}
        {/* <Project heading="Patchwork Browser" slug="project-patchwork-browser">
          Exploration of what a web browser could be. Completely transform the
          tab UI. A reinvention of the browser UI made for work.
        </Project> */}
      </VStack>
      <Spacer size={7} />
    </Page>
  )
}

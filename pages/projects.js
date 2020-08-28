import styled from '@emotion/styled'

import Page from '../components/Page'
import LoremParagraphs from '../components/LoremParagraphs'
import Heading, { Section } from '../components/Heading'
import { VStack } from '../components/Stack'
import theme from '../components/theme'
import P from '../components/P'
import Spacer from '../components/Spacer'
import { css } from '@emotion/core'

const Project = ({ title, img, children }) => (
  <Section>
    <VStack space={0}>
      <div
        style={{
          fontWeight: theme.fontWeights[2],
          fontSize: theme.fontSizes[1],
          // width: theme.measure[0],
        }}
      >
        {title}
      </div>
      {img && (
        <img
          src={img}
          css={css`
            width: 100%;
            border: 1px solid;
          `}
        />
      )}
      {<P>{children}</P> || <LoremParagraphs count={1} />}
    </VStack>
  </Section>
)

export default function Projects() {
  return (
    <Page title="Projects">
      <VStack space={7}>
        <Project title="Patchwork Browser" img="/project-patchwork-2x.png">
          Exploration of what a web browser could be. Completely transform the
          tab UI. A reinvention of the browser UI made for work.
        </Project>
        <Project title="Huet">
          Library for having the computer pick your exact hex color codes so you
          can say "I want this to be red" and have it look good (accesible).
        </Project>
        <Project title="JPEG Text Degrader">
          What if you take a JPEG image and then compress it again and again and
          again and you get to watch it as it happens. Maybe it'll look like one
          of those timelapses of decaying fruit. That could be something, right?
        </Project>
        <Project title="Validated">
          An opinionated validation library that takes care of your UX. This
          means the library decides when error messages are shown, so you only
          have to worry about about validation rules.
        </Project>
      </VStack>
      <Spacer size={7} />
    </Page>
  )
}

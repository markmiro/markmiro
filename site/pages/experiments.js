import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Page from '../components/Page'
import theme from '../components/theme'
import Card from '../components/Card'
import A from '../components/A'
import { VStack } from '../components/Stack'
import content from '../components/_siteContent'

const Img = ({ src }) => (
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
      css={css`
        position: absolute;
        width: 100%;
        display: block;
      `}
      src={src}
      loading="lazy"
    />
  </div>
)

const FakeA = ({ children }) => (
  <div>
    <A
      as="span"
      css={css`
        display: inline-block;
      `}
    >
      {children}
    </A>
  </div>
)

const Grid = styled.div`
  display: grid;
  grid-gap: ${theme.space[4]};
  @media ${theme.mediaQueries.experiments.mobileAndAbove} {
    grid-template-columns: 1fr 1fr;
  }
`

function Experiment({ heading, slug, href }) {
  return (
    <a
      href={href}
      css={css`
        color: inherit;
      `}
    >
      <Card as={VStack} space={2}>
        <Img src={`/preprebuild/videos/${slug}.gif`} />
        <FakeA>{heading}</FakeA>
      </Card>
    </a>
  )
}

export default function Experiments() {
  return (
    <Page title="Experiments">
      <Grid>
        {content.experiments.map(({ href, heading, slug }) => (
          <Experiment key={slug} href={href} heading={heading} slug={slug} />
        ))}
      </Grid>
    </Page>
  )
}

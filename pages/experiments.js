import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Page from '../components/Page'
import theme from '../components/theme'
import Card from '../components/Card'
import A from '../components/A'
import { VStack } from '../components/Stack'

const Img = ({ src }) => (
  <div
    css={css`
      /* Make ratio 2:1 using padding-bottom */
      width: 100%;
      padding-bottom: 50%;
      position: relative;
    `}
  >
    <img
      css={css`
        position: absolute;
        width: 100%;
        display: block;
      `}
      src={src}
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
  @media ${theme.mediaQueries.mobileAndAbove} {
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
        <Img src={`/prebuild/videos/${slug}.gif`} />
        <FakeA>{heading}</FakeA>
      </Card>
    </a>
  )
}

export default function Experiments() {
  return (
    <Page title="Experiments">
      <Grid>
        <Experiment
          href="https://codepen.io/markmiro/pen/wbqMPa"
          heading="3D Card"
          slug="3d-card"
        />
        <Experiment
          href="https://codepen.io/markmiro/pen/RYOgQK"
          heading="Marquee"
          slug="marquee"
        />
        <Experiment
          href="https://codesandbox.io/s/987kj26rzw"
          heading="React-like API in 70 lines"
          slug="react-like-api-in-70-lines"
        />
        <Experiment
          href="https://codepen.io/markmiro/full/mwKMvZ"
          heading="Fireworks"
          slug="fireworks"
        />
        <Experiment
          href="https://codesandbox.io/s/yw6vxn7q1v"
          heading="Parameterized UI Contrast"
          slug="parameterized-ui-contrast"
        />
        <Experiment
          href="https://codesandbox.io/s/7ywkjkqj96"
          heading="Split View"
          slug="split-view"
        />
        <Experiment
          href="https://codepen.io/markmiro/pen/RYLbZx"
          heading="Tooltip"
          slug="tooltip"
        />
        <Experiment
          href="https://codepen.io/markmiro/pen/YOaoYp"
          heading="Minesweeper"
          slug="minesweeper"
        />
        <Experiment
          href="https://codesandbox.io/s/react-tree-reducer-example-redux-60r3p?file=/src/App.js"
          heading="Performant Tree"
          slug="performant-tree"
        />
        <Experiment
          href="https://codepen.io/markmiro/pen/gdEJZr"
          heading="Brutalist Toggle"
          slug="brutalist-toggle"
        />
        <Experiment
          href="https://codepen.io/markmiro/pen/ZmEbeo"
          heading="Fixed content in scrollable window"
          slug="fixed-content-in-scrollable-window"
        />
      </Grid>
    </Page>
  )
}

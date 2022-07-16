import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { IconArrowUpRight } from '@tabler/icons'
import Card, { CardBody } from '../components/Card'
import Hr from '../components/Hr'
import { LinkBox, LinkOverlay } from '../components/LinkOverlay'
import Page from '../components/Page'
import theme from '../components/theme'
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

const Grid = styled.div`
  display: grid;
  grid-gap: ${theme.space[4]};
  @media ${theme.mediaQueries.experiments.mobileAndAbove} {
    grid-template-columns: 1fr 1fr;
  }
`

const hoverClassName = 'hover-hint'

function Experiment({ heading, slug, href }) {
  return (
    <LinkBox>
      <Card
        css={css`
          overflow: hidden;
          :hover .${hoverClassName} {
            transform: translateY(0%);
            opacity: 1;
          `}
      >
        <Img src={`/preprebuild/videos/${slug}.gif`} />
        <Hr />
        <CardBody
          css={css`
            padding-top: ${theme.space[1]};
            padding-bottom: ${theme.space[1]};
          `}
        >
          <LinkOverlay
            href={href}
            css={css`
              text-decoration: none;
              color: inherit;
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            {heading}
            <IconArrowUpRight
              size={theme.fontSizes[0]}
              stroke={2}
              className={hoverClassName}
              css={css`
                transition: all 100ms ease-out;
                opacity: 0;
              `}
            />
          </LinkOverlay>
        </CardBody>
      </Card>
    </LinkBox>
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

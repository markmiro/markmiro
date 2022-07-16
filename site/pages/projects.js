import { css } from '@emotion/react'

import { IconArrowUpRight } from '@tabler/icons'
import Card, { CardBody } from '../components/Card'
import { Section } from '../components/Heading'
import { LinkBox, LinkOverlay } from '../components/LinkOverlay'
import LoremParagraphs from '../components/LoremParagraphs'
import P from '../components/P'
import Page from '../components/Page'
import Spacer from '../components/Spacer'
import { VStack } from '../components/Stack'
import theme from '../components/theme'
import content from '../components/_siteContent'
import Hr from '../components/Hr'

const hoverClassName = 'hover-hint'

const Project = ({ href, heading, slug, children }) => (
  <Section>
    <LinkBox>
      <Card
        css={css`
          overflow: hidden;
          :hover .${hoverClassName} {
            background: ${theme.colors.c8};
            color: ${theme.colors.c0};
          }
        `}
      >
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
                // border-bottom: 1px solid ${theme.colors.c1};
                // box-shadow: 0px 1px 2px #00000022, 0px 2px 5px #00000022;
              `}
            />
          </div>
        )}
        <Hr />
        <CardBody css={css``}>
          <LinkOverlay
            href={href}
            css={css`
              font-weight: ${theme.fontWeights[2]};
              text-decoration: none;
              color: inherit;
              display: inline-flex;
              align-items: center;
              justify-content: space-between;
              gap: ${theme.gap[2]};
              svg {
                opacity: 0;
              }
              :hover svg {
                opacity: 1;
              }
            `}
          >
            {heading}
          </LinkOverlay>
          <Spacer size={0} />
          {(
            <P
              css={css`
                max-width: ${theme.measure[0]};
                font-size: ${theme.fontSizes[-1]};
                line-height: ${theme.lineHeights[0]};
              `}
            >
              {children}
            </P>
          ) || <LoremParagraphs count={1} />}
        </CardBody>
        {href && (
          <div
            css={css`
              text-align: right;
            `}
          >
            <div
              className={hoverClassName}
              css={css`
                font-size: ${theme.fontSizes[-1]};
                text-decoration: none;
                color: inherit;
                display: inline-flex;
                align-items: center;
                padding: ${theme.space[0]} ${theme.space[1]};
                margin-right: ${theme.space[2]};
                background: ${theme.colors.c1};
                color: ${theme.colors.c8};
                gap: ${theme.gap[2]};
                transition: all 100ms ease-out;
                // transform: translateY(100%);
                // opacity: 0;
              `}
            >
              View Project
              {href.startsWith('https://') && (
                <IconArrowUpRight size={theme.fontSizes[0]} stroke={1} />
              )}
            </div>
          </div>
        )}
      </Card>
    </LinkBox>
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

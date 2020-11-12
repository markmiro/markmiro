import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Page from "../components/Page"
import Link from "../components/Link"
import { VStack } from "../components/Stack"
import Spacer from "../components/Spacer"
import SubscribeForm from "../components/SubscribeForm"
import P from "../components/P"
import Heading, { Section } from "../components/Heading"
import Hr from "../components/Hr"

const Post = ({ href, title, description }) => (
  <VStack space={3}>
    <Section>
      <Link to={href}>
        <Heading>{title}</Heading>
      </Link>
      <P>{description}</P>
      <Link to={href}>Read →</Link>
    </Section>
  </VStack>
)

export default function Posts({ data }) {
  return (
    <Page title="Posts">
      <VStack
        space={7}
        css={css`
          align-items: flex-start;
        `}
      >
        {/* <Json json={data} /> */}
        {data.allMdx.nodes.map(({ id, slug, frontmatter, excerpt }) => (
          <Post
            key={id}
            href={"/posts/" + slug}
            title={frontmatter.title}
            description={excerpt}
          />
        ))}
      </VStack>
      <Spacer size={7} />
      <SubscribeForm />
    </Page>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          title
        }
        excerpt(pruneLength: 500, truncate: false)
      }
    }
  }
`

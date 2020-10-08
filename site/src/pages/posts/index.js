import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Page from "../../components/Page"
import { VStack } from "../../components/Stack"
import Spacer from "../../components/Spacer"
import SubscribeForm from "../../components/SubscribeForm"
import P from "../../components/P"
import Heading, { Section } from "../../components/Heading"
import Hr from "../../components/Hr"
import Json from "../../components/Json"

const Post = ({ href, title, description, timestamp }) => (
  <Section>
    <Section>
      <Link
        to={href}
        css={css`
          align-self: flex-start;
        `}
      >
        <Heading>{title}</Heading>
      </Link>
      <P>{description}</P>
      <Link
        to={href}
        css={css`
          align-self: flex-start;
        `}
      >
        Read →
      </Link>
    </Section>
    <Hr />
  </Section>
)

export default function Posts({ data }) {
  return (
    <Page title="Posts">
      <VStack space={3}>
        {/* <Json json={data} /> */}
        {data.allMdx.nodes.map(({ id, slug, frontmatter, excerpt }) => (
          <Post
            key={id}
            href={"/" + slug}
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

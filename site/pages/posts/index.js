// Static imports
import fs from 'fs'
import path from 'path'

import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Page from '../../components/Page'
import { VStack } from '../../components/Stack'
import Spacer from '../../components/Spacer'
import SubscribeForm from '../../components/SubscribeForm'
import P from '../../components/P'
import Heading, { Section } from '../../components/Heading'
import Hr from '../../components/Hr'
import theme from '../../components/theme'
import Card from '../../components/Card'

const A = styled.a`
  padding-top: ${theme.space[1]};
  padding-bottom: ${theme.space[1]};
`

// `getStaticProps() implementation` inspired by: https://github.com/vercel/next.js/blob/master/examples/blog-starter/pages/index.js#L38
export function getStaticProps() {
  const allExceptThisFile = (fileName) => {
    const thisFile = __filename // returns '/index.js'
    const thisFileName = thisFile.replace(/^\//, '') // Remove '/' from the beginning of the string
    return thisFileName !== fileName
  }

  // readdirSync() return an array of file names like `['file1.mdx', 'file2.mdx']`
  const fileNames = fs
    .readdirSync(path.join(process.cwd(), '/pages/posts'))
    .filter(allExceptThisFile)

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '') // Remove '.mdx' extension
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), '/pages/posts', fileName),
      'utf-8'
    )

    return {
      title: slug,
      slug,
      contents: fileContents,
    }
  })

  return {
    props: {
      fileNames,
      posts,
      // posts: [
      //   { slug: 'first-post', title: 'First Post' },
      //   { slug: 'styling-in-react', title: 'Styling in React' },
      // ],
    },
  }
}

const Post = ({ title, subTitle, href }) => (
  <VStack>
    <Section>
      <Section>
        <Link passHref href={href}>
          <a
            css={css`
              align-self: flex-start;
            `}
          >
            <Heading>{title}</Heading>
          </a>
        </Link>
        <P>{subTitle}</P>
        <Link passHref href={href}>
          <a
            css={css`
              align-self: flex-start;
            `}
          >
            Read →
          </a>
        </Link>
      </Section>
    </Section>
  </VStack>
)

export default function Posts({ posts }) {
  return (
    <Page title="Posts">
      <div>
        <VStack>
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
              <Card as="a">{post.title}</Card>
            </Link>
          ))}
        </VStack>
        <VStack space={3}>
          <Post
            href="/posts/touchbar"
            title="Why did Apple invent the TouchBar?"
            subTitle="            The TouchBar is a rare gimmick for Apple. After 4 years, I think
            it's fair consider it a failure, but still the question remains.
            Why? The more I thought about this question the more I began to see
            why Apple might have 1) chosen the keyboard as a locus of innovation
            in the 2016 MacBook Pro, and 2) decided the TouchBar was chosen as a
            solution."
          ></Post>
          <Hr />
          <Post
            href="/posts/second-post"
            title="Occaecat occaecat qui elit adipisicing"
            subTitle="Deserunt voluptate reprehenderit voluptate mollit anim ipsum quis veniam commodo tempor amet ullamco ullamco. Laboris ad labore laboris id quis veniam velit id. Excepteur sit enim nostrud aliquip aliquip. Id ea enim consectetur occaecat ad Lorem proident deserunt Lorem laboris qui est in do. Labore sunt dolore amet qui duis. Occaecat irure aliqua aliqua officia commodo magna aliqua deserunt sit minim."
          ></Post>
          <Hr />
          <Post
            href="/posts/second-post"
            title="Commodo exercitation laborum elit ipsum ad"
            subTitle="Id voluptate excepteur quis est in duis qui velit tempor et. Id est in eiusmod mollit ea mollit aliqua. Anim laborum in consectetur quis dolor. Adipisicing consequat esse et duis aute est dolor sunt aliquip. Amet aute nostrud Lorem sint. Sint nostrud tempor dolor reprehenderit."
          ></Post>
          <Hr />
        </VStack>
      </div>
      <Spacer size={7} />
      <SubscribeForm />
    </Page>
  )
}

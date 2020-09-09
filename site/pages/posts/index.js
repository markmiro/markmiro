// Static imports
import fs from 'fs'
import path from 'path'

import Link from 'next/link'
import styled from '@emotion/styled'

import theme from '../../components/theme'
import Page from '../../components/Page'
import Card from '../../components/Card'
import { VStack } from '../../components/Stack'

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
    const slug = fileName.replace(/\.[a-z]+$/, '') // Remove '.mdx' extension
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

export default function Posts({ posts }) {
  return (
    <Page title="Posts">
      <VStack>
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
            <Card as="a">{post.title}</Card>
          </Link>
        ))}
      </VStack>
    </Page>
  )
}

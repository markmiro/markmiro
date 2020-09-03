import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { css } from '@emotion/core'

import { getAllPosts, getPostBySlug } from '../../lib/api'
import Page from '../../components/Page'
import Json from '../../components/Json'
import theme from '../../components/theme'

export async function getStaticPaths() {
  const paths = getAllPosts().map((post) => ({
    params: { slug: post.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return { props: getPostBySlug(params.slug) }
}


export default function Post(post) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Page title={post.slug}>
        <Json json={post} />
        <pre>{post.fileContents}</pre>
    </Page>
  )
}

import Page from '../../components/Page'
import Link from 'next/link'

export default function Posts() {
  return (
    <Page title="Posts">
      <Link href="/posts/first-post">
        <a>First Post</a>
      </Link>
      <br />
      <Link href="/posts/second-post">
        <a>Second Post</a>
      </Link>
    </Page>
  )
}

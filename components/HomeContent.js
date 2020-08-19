import Link from 'next/link'

export default function HomeContent() {
  return (
    <div>
      <img
        src="/mark-miro-portrait-1x.jpg"
        srcset="/mark-miro-portrait-2x.jpg 2x"
      />
      <h1>
        Mark Miro
        <small>UI Engineer</small>
      </h1>
      <section>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </section>
      <section>
        <header>Links</header>
        <Link href="https://codepen.io/markmiro">CodePen</Link>
        <Link href="https://codesandbox.io/u/markmiro">CodeSandBox</Link>
        <Link href="https://twitter.com/markmiro">Twitter</Link>
        <Link href="https://github.com/markmiro">GitHub</Link>
      </section>
      <footer>Last updated Jan 2, 2020</footer>
    </div>
  )
}

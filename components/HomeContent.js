import Link from 'next/link'

export default function HomeContent() {
  return (
    <div>
      <img
        src="/markmiro-portrait-1x.jpg"
        srcSet="/markmiro-portrait-2x.jpg 2x"
      />
      <h1>
        Mark Miro
        <small>UI Engineer</small>
      </h1>
      <section>
        <nav>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </nav>
      </section>
      <section>
        <header>Links</header>
        <Link href="https://codepen.io/markmiro">
          <a>CodePen</a>
        </Link>
        <Link href="https://codesandbox.io/u/markmiro">
          <a>CodeSandBox</a>
        </Link>
        <Link href="https://twitter.com/markmiro">
          <a>Twitter</a>
        </Link>
        <Link href="https://github.com/markmiro">
          <a>GitHub</a>
        </Link>
      </section>
      <footer>Last updated Jan 2, 2020</footer>
    </div>
  )
}

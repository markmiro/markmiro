import Link from 'next/link'
import ActiveLink from './ActiveLink'

export default function Nav() {
  return (
    <nav>
      <h1>
        Mark Miro
        <small>UI Engineer</small>
      </h1>
      <section>
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/posts">Posts</ActiveLink>
          <ActiveLink href="/projects">Projects</ActiveLink>
        </nav>
      </section>
      <section>
        <header>Links</header>
        <Link href="https://codepen.io/markmiro">CodePen</Link>
        <Link href="https://codesandbox.io/u/markmiro">CodeSandBox</Link>
        <Link href="https://twitter.com/markmiro">Twitter</Link>
        <Link href="https://github.com/markmiro">GitHub</Link>
      </section>
    </nav>
  )
}

import { useEffect, useState } from 'react'
// Code stolen from: https://nextjs.org/docs/api-reference/next/router#userouter
import Link from 'next/link'
import { useRouter } from 'next/router'
import A from './A'
import theme from './theme'

function ActiveLink({ children, href, ...rest }) {
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(router.pathname === href)
  }, [router, href])

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  if (href.startsWith('https://')) {
    return (
      <Link key={href} href={href} passHref>
        <A {...rest}>{children}</A>
      </Link>
    )
  }

  return (
    <A href={href} onClick={handleClick} isActive={isActive} {...rest}>
      {children}
    </A>
  )
}

export default ActiveLink

// Code stolen from: https://nextjs.org/docs/api-reference/next/router#userouter
import { useRouter } from 'next/router'
import theme from './theme'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const style = {
    color:
      router.pathname === href
        ? theme.colors.red
        : theme.colors.neutral.darkest,
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink

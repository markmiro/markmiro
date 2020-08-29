// Code stolen from: https://nextjs.org/docs/api-reference/next/router#userouter
import { useRouter } from 'next/router'
import theme from './theme'
import A from './A'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const style = {
    color: router.pathname === href ? theme.colors.red : '',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <A href={href} onClick={handleClick} style={style}>
      {children}
    </A>
  )
}

export default ActiveLink

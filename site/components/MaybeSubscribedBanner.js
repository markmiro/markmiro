import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from './Button'
import theme from './theme'

const TRANSITION_DURATION = 300 // ms
const BANNER_SHOW_DURATION = 4000 //ms

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.space[2]};
  font-size: ${theme.fontSizes[2]};

  color: ${theme.colors.c0};
  background: ${theme.colors.c8};
  box-shadow: 0 10px 10px #00000022;

  /* Animation stuff */
  transition-property: transform, opacity;
  transition-duration: ${TRANSITION_DURATION}ms;
  transform: translateY(${(props) => (props.isOpen ? '0' : '-20')}px);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  display: ${(props) => (props.isHidden ? 'none !important' : '')};
`

/**
 * Show banner if subscribed query string is present
 */
export default function MaybeSubscribedBanner() {
  const router = useRouter()
  const isConfirmed = router.query.subscribed
  const [isOpen, setIsOpen] = useState(true)
  const [isHidden, setIsHidden] = useState(true)

  function close() {
    setIsOpen(false)
    setTimeout(() => {
      setIsHidden(true)
    }, TRANSITION_DURATION)
  }

  useEffect(() => {
    setIsHidden(false)
    setTimeout(close, BANNER_SHOW_DURATION)
  }, [])

  if (isConfirmed) {
    return (
      <Container isOpen={isOpen} isHidden={isHidden}>
        Thanks for Subscribing! <Button onClick={close}>Close</Button>
      </Container>
    )
  }

  return null
}

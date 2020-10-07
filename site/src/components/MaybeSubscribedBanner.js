import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router"

import Button from "./Button"
import theme from "./theme"

const BANNER_SHOW_DURATION = 4000 //ms

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.space[2]};
  font-size: ${theme.fontSizes[1]};

  color: ${theme.colors.c0};
  background: ${theme.colors.green};
  box-shadow: 0 10px 10px #00000022;
`

/**
 * Show banner if subscribed query string is present
 */
export default function MaybeSubscribedBanner() {
  const location = useLocation()
  const isConfirmed = location.search.includes("?subscribed=1")
  const [isOpen, setIsOpen] = useState(true)

  function close() {
    setIsOpen(false)
    // Remove the query string so we don't show the message again when going back
    navigate(document.location.pathname, { replace: true })
  }

  useEffect(() => {
    if (!isConfirmed) return
    const timeout = setTimeout(close, BANNER_SHOW_DURATION)
    return () => clearTimeout(timeout)
  }, [isConfirmed])

  if (isConfirmed) {
    return (
      <Container isOpen={isOpen}>
        Thanks for Subscribing! <Button onClick={close}>Close</Button>
      </Container>
    )
  }

  return null
}

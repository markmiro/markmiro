import React from "react"
import { Link as GatsbyLink } from "gatsby"
import theme from "./theme"
import A from "./A"

const Link = ({ children, to }) => (
  <A
    as={GatsbyLink}
    to={to}
    partiallyActive={true}
    activeStyle={{ color: theme.colors.red }}
  >
    {children}
  </A>
)

export default Link

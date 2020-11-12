import React from "react"
import styled from "@emotion/styled"
import { Link as GatsbyLink } from "gatsby"

import theme from "./theme"

const Item = styled.li`
  margin-left: ${theme.space[4]};
  list-style-type: disc;
`

export function TableOfContents({ items, depth }) {
  return (
    <ul>
      {items.map(item => (
        <Item key={item.title}>
          <GatsbyLink to={item.url}>{item.title}</GatsbyLink>
          {item.items && depth > 1 && (
            <TableOfContents depth={depth - 1} items={item.items} />
          )}
        </Item>
      ))}
    </ul>
  )
}

// https://chakra-ui.com/docs/components/link-overlay
// Code from:
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/link-box.tsx

import styled from '@emotion/styled'

export const LinkOverlay = styled.a`
  position: static;

  &::after {
    content: '';
    cursor: inherit;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`

export const LinkBox = styled.div`
  position: relative;

  // To see this in action, add another link inside the LinkBox that isn't the LinkOverlay
  // Since the link overlay covers the entire container, we want to selectively bring all non-overlay up to a higher
  // z-index so that the overlay doesn't cover these links.
  a[href]:not(${LinkOverlay}),
  abbr[title] {
    position: relative;
    z-index: 1;
  }
`

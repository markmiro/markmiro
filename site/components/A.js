import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconArrowUpRight, IconExternalLink } from '@tabler/icons'
import React from 'react'
import theme from './theme'

const spacingX = '1px'
const spacingY = '0px'

const externalIconClassName = 'icon-external'

const A = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  gap: ${theme.gap[2]};
  align-items: center;

  ${(props) =>
    props.isActive &&
    css`
      color: ${theme.colors.red};
      outline: revert !important; // get outline back
    `}

  ::before {
    content: '';
    position: absolute;
    left: calc(-1 * ${spacingX});
    top: calc(-1 * ${spacingY});
    width: calc(100% + ${spacingX} * 2);
    height: calc(100% + ${spacingY} * 2);
    background: transparent;
    backdrop-filter: invert(1) hue-rotate(180deg);

    transition: transform 150ms ease-out;
    transform-origin: top left;
    transform: scaleX(0);
    z-index: 1;
  }
  :focus {
    outline: none;
  }
  :is(:hover, :focus)::before {
    transform: ${(props) => (props.isActive ? '' : 'scaleX(1)')};
  }

  @keyframes icon-appear {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  .${externalIconClassName} {
    transform: translateX(-0.25em);
    opacity: 0;
  }
  :is(:hover, :focus) .${externalIconClassName} {
    transition-delay: 50ms;
    transition: 100ms ease-out;
    transition-property: opacity transform;
    transform: translateX(0);
    opacity: 1;
  }
`

const A2 = React.forwardRef(({ children, href, ...rest }, ref) => {
  return (
    <A href={href} ref={ref} {...rest}>
      {children}
      {href.startsWith('https://') && (
        <IconArrowUpRight
          size={theme.fontSizes[0]}
          stroke={1}
          className={externalIconClassName}
        />
      )}
    </A>
  )
})

// Add displayName to pass linting
A2.displayName = 'A2'

export default A2

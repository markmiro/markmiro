import styled from '@emotion/styled'

const spacingX = '0px'
const spacingY = '0px'

const A = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;
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
  }
  :hover ::before {
    transform: scaleX(1);
  }
`
export default A

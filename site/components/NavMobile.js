import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconMenu2 } from '@tabler/icons'
import { useEffect, useState } from 'react'
import Button from './Button'
import NavInner from './NavInner'
import Spacer from './Spacer'
import theme from './theme'

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  opacity: 0.2;
  background: ${theme.colors.c8};
  top: 0;
  left: 0;
  width: 100%;
  width: -webkit-fill-available;
  height: 100%;
  @media ${theme.mediaQueries.mobileAndAbove} {
    display: none;
  }
`

export function NavMobile() {
  const [shouldShowOnMobile, setShouldShowOnMobile] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.key === 'Escape' && setShouldShowOnMobile(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Lock body scrolling when nav is open
  useEffect(() => {
    window.document.body.style.overflow = shouldShowOnMobile ? 'hidden' : 'auto'
  }, [shouldShowOnMobile])

  const invisible = css`
    :focus-within {
      background: ${theme.colors.c0};
    }
    &:not(:focus-within) {
      opacity: 0;
      transform: translateX(-2em);
      pointer-events: none;
      height: 0;
    }
  `

  const visible = css`
    transition-property: transform, opacity, height;
    transition-timing-function: ease-out;
    transition-duration: 100ms;
    opacity: 1;
    transform: translateX(0);
  `

  return (
    <>
      {shouldShowOnMobile && (
        <Backdrop onClick={() => setShouldShowOnMobile(false)} />
      )}
      <div
        css={css`
          display: block;
          position: fixed;
          z-index: 1;
          top: 0;
          max-height: 100vh;

          @media ${theme.mediaQueries.mobileAndAbove} {
            display: none;
          }
        `}
      >
        <div
          css={css`
            ${shouldShowOnMobile &&
            css`
              background: ${theme.colors.c0};
              min-width: ${theme.measure.navColumnText};
              overflow-y: auto;
              max-height: 100vh;
              height: -webkit-fill-available;
              -webkit-overflow-scrolling: touch;
            `}
            width: max-content;
            padding: 0 ${theme.pagePadding};
          `}
        >
          <Button
            onClick={() => setShouldShowOnMobile((s) => !s)}
            css={css`
            border: none;
            display: flex;
            align-items: center;
            gap: ${theme.space[0]};
            }
          `}
          >
            <IconMenu2 size={16} stroke={1} strokeLinejoin="miter" />
            Menu
          </Button>

          <div css={shouldShowOnMobile ? visible : invisible}>
            <div
              css={css`
                padding: ${theme.pagePadding} 0;
              `}
            >
              <NavInner />
              <Spacer size={3} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import styled from '@emotion/styled'
import { css } from '@emotion/core'

import theme from '../components/theme'
import NavInner from '../components/NavInner'
import Vr from '../components/Vr'
import { HStack } from '../components/Stack'
import MyPortrait from '../components/MyPortrait'
import Footer from '../components/Footer'
import Head2 from '../components/Head2'
import MetaTags from '../components/MetaTags'

const ContentContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${theme.pagePadding};
  padding-bottom: ${theme.pagePadding};
`

export default function Index() {
  return (
    <div>
      <Head2>
        <MetaTags />
      </Head2>
      <ContentContainer>
        <HStack space={2}>
          <MyPortrait width="6em" />
          <Vr
            css={css`
              border-left: 1px solid ${theme.colors.c8};
            `}
          />
          <div
            style={{ marginTop: -5 /* Minor adjustment to visually align */ }}
          >
            <NavInner />
          </div>
        </HStack>
      </ContentContainer>
      <Footer />
    </div>
  )
}

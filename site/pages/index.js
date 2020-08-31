import Head from 'next/head'
import styled from '@emotion/styled'

import content from '../components/_siteContent'
import theme from '../components/theme'
import NavInner from '../components/NavInner'
import Vr from '../components/Vr'
import { HStack } from '../components/Stack'
import MyPortrait from '../components/MyPortrait'
import Footer from '../components/Footer'

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
      <Head>
        <title>{content.siteName}</title>
        {/*
          Generated with: https://favicon.io
          Font size: 88
          Font: Montserrat
        */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <ContentContainer>
        <HStack space={2}>
          <MyPortrait width="100px" />
          <Vr />
          <div
            style={{ marginTop: -6 /* Minor adjustment to visually align */ }}
          >
            <NavInner />
          </div>
        </HStack>
      </ContentContainer>
      <Footer />
    </div>
  )
}

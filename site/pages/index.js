import Head from 'next/head'
import styled from '@emotion/styled'

import theme from '../components/theme'
import NavInner from '../components/NavInner'
import Vr from '../components/Vr'
import { HStack } from '../components/Stack'
import MyPortrait from '../components/MyPortrait'
import updated from '../prebuild/date-updated.json'

const ContentContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${theme.pagePadding};
  padding-bottom: ${theme.pagePadding};
`

const Footer = styled.footer`
  border-top: 1px solid ${theme.colors.neutral.light};
  padding: ${theme.space[1]};
  text-align: center;
  font-weight: ${theme.fontWeights[0]};
  font-size: ${theme.fontSizes[-1]};
  color: ${theme.colors.neutral.dark};
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mark Miro</title>
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
      <Footer>Last updated {new Date(updated).toLocaleString()}</Footer>
    </div>
  )
}

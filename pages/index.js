import Head from 'next/head'
import { styled } from 'linaria/react'

import HomeContent from '../components/HomeContent'
import theme from '../components/theme'

const HomeContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${theme.space[3]};
  padding-bottom: ${theme.space[3]};
`

const Footer = styled.footer`
  padding: ${theme.space[1]};
  border-top: 1px solid ${theme.colors.neutral.light};
  font-size: ${theme.fontSizes[-1]};
  text-align: center;
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
      <HomeContainer>
        <HomeContent />
      </HomeContainer>
      <Footer>Last updated August 19, 2020</Footer>
    </div>
  )
}

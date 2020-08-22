import Head from 'next/head'
import { styled } from 'linaria/react'

import HomeContent from '../components/HomeContent'
import theme from '../components/theme'

const Footer = styled.footer`
  padding: ${theme.space[2]};
  border-top: 1px solid ${theme.colors.neutral.light};
  font-weight: ${theme.fontWeights[0]};
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
      <HomeContent />
      <Footer>Last updated August 19, 2020</Footer>
    </div>
  )
}

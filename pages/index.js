import Head from 'next/head'
import { styled } from 'linaria/react'

import HomeContent from '../components/HomeContent'

const HomeContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 2em;
  padding-bottom: 2em;
`

const Footer = styled.footer`
  padding: 1em;
  border-top: 1px solid #eee;
  font-size: 14px;
  text-align: center;
  color: #999;
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

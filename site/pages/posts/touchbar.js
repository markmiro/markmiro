import { css } from '@emotion/core'

import Caption, { Captioned } from '../../components/Caption'
import P from '../../components/P'
import Hr from '../../components/Hr'
import Page from '../../components/Page'
import Img from '../../components/Img'
import { VStack } from '../../components/Stack'
import Heading, { Section } from '../../components/Heading'
// import Svg from '../../components/macbook-pro-2015-keys.svg'

export default function Touchbar() {
  return (
    <Page title="Why did Apple invent the TouchBar?">
      <VStack space={4}>
        <Img src="/macbook-pro-2015-keys.svg" />
        <P>
          The TouchBar is a rare gimmick for Apple. After 4 years, I think it's
          fair consider it a failure, but still the question remains. Why? The
          more I thought about this question the more I began to see why Apple
          might have 1) chosen the keyboard as a locus of innovation in the 2016
          MacBook Pro, and 2) decided the TouchBar was chosen as a solution.
        </P>
        <Section>
          <Heading>What problem was Apple trying to solve?</Heading>
          <P>
            The TouchBar isn't the first time Apple decided to rethink the
            function row. Apple's keyboards have been evolving for decades. In
            fact, their early keyboards didn't include a function row at all.
          </P>
          <Captioned>
            <Img src="/posts/touchbar/touchbar-1.jpeg" />
            <Caption>Apple (Standard) Keyboard M0116</Caption>
          </Captioned>
          <P>IBM popularized function keys. Apple eventually added them too.</P>
          <Captioned>
            <Img src="/posts/touchbar/touchbar-2.jpeg" />
            <Caption>
              Notice how the top right keys control volume? Apple didn't
              introduce the media keys all at once. Image from{' '}
              <a href="https://webdesignerdepot.com">webdesignerdepot.com</a>
            </Caption>
          </Captioned>
          <P>
            Apple later decided the function row should have default behaviors
            rather than being general-purpose. Below, is the modern iteration:
          </P>
          <Img src="/posts/touchbar/touchbar-3.jpeg" />
          <P>
            Why would Apple decide to replace these keys with a TouchBar? Maybe
            it's because some of the keys aren't as useful as we think.
          </P>
          <P>
            Like most pro users, I use the ESC key a lot. I use the media keys
            often. I also adjust brightness a lot more than I'd like to admit.
            But there are also keys I never use (in red, below).
          </P>
          <Img src="/posts/touchbar/touchbar-4.jpeg" />
          <P>
            Of the 14 keys, 4 are useless to me. If your usage looks similar to
            mine, you're likely among the most frustrated by Apple's new
            keyboard.
          </P>
          <P>
            But what if I'm not listening to music? That's when I start to see
            the rationale behind Apple's thinking.
          </P>
          <Img src="/posts/touchbar/touchbar-5.jpeg" />
          <P>
            The result is that 10 out of 14 keys go unused. And because I'm a
            weirdo for adjusting my display brightness multiple times a day, I
            think the average person just uses the ESC key.
          </P>
          <Img src="/posts/touchbar/touchbar-6.jpeg" />
        </Section>
        <Section>
          <Heading>Why a TouchBar?</Heading>
          <P>
            Shouldn't Apple, in pursuit of simplicity, keep only the ESC and
            power buttons? For the average user sure, but for power users the
            keys represent an opportunity for innovation.
          </P>
          <P>
            <Img
              src="/posts/touchbar/touchbar-7.png"
              css={css`
                float: left;
                width: 15em;
              `}
            />
            But why replace keys with a touchscreen? The TouchBar isn't the
            first time Apple eschewed physical keys for touch inputs. When the
            iPhone was released, people thought they'd miss the physical
            keyboard (which the Blackberry had), but were delighted to be wrong.
            If a touch-based keyboard was good enough as a primary input
            mechanism on a phone, it's certainly a reasonable replacement for
            the infrequently used function row.
          </P>
        </Section>
        <Section>
          <Heading>Other solutions</Heading>
        </Section>
        <P>
          Depending on who you are, the new design is probably worse for you in
          one way or another. If Apple can make up for it by making the rest of
          the TouchBar useful enough, then in theory it could win people back.
        </P>
        <P>
          If you listen to a lot of music then you're going to be very annoyed
          by the TouchBar. If that's you, I'd suggest you do what I did and go
          into the Keyboard settings and make the Touch Bar show the "Expanded
          Control Strip" as you can see below.
        </P>
        <Img src="/posts/touchbar/touchbar-8.jpeg" />
        <P>
          Another conclusion I can draw from my findings is that the value of
          the function keys depends on the context. In fact, that's why IBM
          added them. In this sense, Apple's TouchBar is a reformulation of the
          classic function row.
        </P>
        <Hr />
        <P>
          I think it's safe to conclude that Apple had good reasons to embark on
          reinventing the function row. They identified something I didn't know
          was a problem. This is classic Apple. I think the problem is about how
          they decided to tackle the problem. When the iPhone was released,
          people thought they'd miss the physical keyboard (that the Blackberry
          had), but were delighted to be wrong. In this case, many people aren't
          excited about the new design. In 2020 I'm still not in love with it.
        </P>
        <P>Some alternatives I can think of:</P>
        <ul>
          <li>
            Remove the function row entirely. When you press the fn key, allow
            an app to display a UI on
          </li>
          <li>Replace the caps lock key with the esc key</li>
        </ul>
      </VStack>
    </Page>
  )
}

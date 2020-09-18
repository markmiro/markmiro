import Link from 'next/link'

import Page from '../../components/Page'
import { VStack } from '../../components/Stack'
import Spacer from '../../components/Spacer'
import SubscribeForm from '../../components/SubscribeForm'
import P from '../../components/P'
import Heading, { Section } from '../../components/Heading'
import Hr from '../../components/Hr'
import { css } from '@emotion/core'
import theme from '../../components/theme'

const Post = ({ href, title, description, timestamp }) => (
  <Section>
    <Section>
      <Link passHref href={href}>
        <a
          css={css`
            align-self: flex-start;
          `}
        >
          <Heading>{title}</Heading>
        </a>
      </Link>
      <P>{description}</P>
      <Link passHref href={href}>
        <a
          css={css`
            align-self: flex-start;
          `}
        >
          Read →
        </a>
      </Link>
    </Section>
  </Section>
)

export default function Posts() {
  return (
    <Page title="Posts">
      <div>
        <VStack space={3}>
          <Post
            href="/posts/touchbar"
            title="Why did Apple invent the TouchBar?"
            description="The TouchBar is a rare gimmick for Apple. After 4 years, I think it's fair consider it a failure, but still the question remains. Why? The more I thought about this question the more I began to see why Apple might have 1) chosen the keyboard as a locus of innovation in the 2016 MacBook Pro, and 2) decided the TouchBar was chosen as a solution."
          />
          <Hr />
          <Post
            href="/posts/second-post"
            title="Occaecat occaecat qui elit adipisicing"
            description="Deserunt voluptate reprehenderit voluptate mollit anim ipsum quis veniam commodo tempor amet ullamco ullamco. Laboris ad labore laboris id quis veniam velit id. Excepteur sit enim nostrud aliquip aliquip. Id ea enim consectetur occaecat ad Lorem proident deserunt Lorem laboris qui est in do. Labore sunt dolore amet qui duis. Occaecat irure aliqua aliqua officia commodo magna aliqua deserunt sit minim."
          />
          <Hr />
          <Post
            href="/posts/second-post"
            title="Commodo exercitation laborum elit ipsum ad"
            description="Id voluptate excepteur quis est in duis qui velit tempor et. Id est in eiusmod mollit ea mollit aliqua. Anim laborum in consectetur quis dolor. Adipisicing consequat esse et duis aute est dolor sunt aliquip. Amet aute nostrud Lorem sint. Sint nostrud tempor dolor reprehenderit."
          />
          <Hr />
        </VStack>
      </div>
      <Spacer size={7} />
      <SubscribeForm />
    </Page>
  )
}

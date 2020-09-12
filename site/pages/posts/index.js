import Link from 'next/link'
import styled from '@emotion/styled'

import Page from '../../components/Page'
import { VStack } from '../../components/Stack'
import Spacer from '../../components/Spacer'
import SubscribeForm from '../../components/SubscribeForm'
import P from '../../components/P'
import Heading, { Section } from '../../components/Heading'
import Hr from '../../components/Hr'
import theme from '../../components/theme'

const A = styled.a`
  padding-top: ${theme.space[1]};
  padding-bottom: ${theme.space[1]};
`

const Post = ({ title, subTitle, href }) => (
  <VStack>
    <Section>
      <Section>
        <Link passHref href={href}>
          <a>
            <Heading>{title}</Heading>
          </a>
        </Link>
        <P>{subTitle}</P>
        <Link passHref href={href}>
          <a>Read →</a>
        </Link>
      </Section>
    </Section>
  </VStack>
)

export default function Posts({ posts }) {
  return (
    <Page title="Posts">
      <div>
        <VStack space={3}>
          <Post
            href="/posts/first-post"
            title="Reprehenderit est cillum duis ut dolore."
            subTitle="Mollit officia cupidatat adipisicing voluptate duis elit id officia ad excepteur et. Eiusmod laborum nisi voluptate ea ipsum enim ut anim dolore. Pariatur officia laboris ut ad esse ea in magna qui Lorem."
          ></Post>
          <Hr />
          <Post
            href="/posts/second-post"
            title="Occaecat occaecat qui elit adipisicing"
            subTitle="Deserunt voluptate reprehenderit voluptate mollit anim ipsum quis veniam commodo tempor amet ullamco ullamco. Laboris ad labore laboris id quis veniam velit id. Excepteur sit enim nostrud aliquip aliquip. Id ea enim consectetur occaecat ad Lorem proident deserunt Lorem laboris qui est in do. Labore sunt dolore amet qui duis. Occaecat irure aliqua aliqua officia commodo magna aliqua deserunt sit minim."
          ></Post>
          <Hr />
          <Post
            href="/posts/second-post"
            title="Commodo exercitation laborum elit ipsum ad"
            subTitle="Id voluptate excepteur quis est in duis qui velit tempor et. Id est in eiusmod mollit ea mollit aliqua. Anim laborum in consectetur quis dolor. Adipisicing consequat esse et duis aute est dolor sunt aliquip. Amet aute nostrud Lorem sint. Sint nostrud tempor dolor reprehenderit."
          ></Post>
          <Hr />
        </VStack>
      </div>
      <Spacer size={7} />
      <SubscribeForm />
    </Page>
  )
}

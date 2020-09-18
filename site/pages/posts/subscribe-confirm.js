import styled from '@emotion/styled'
import Link from 'next/link'
import Hr from '../../components/Hr'
import P from '../../components/P'
import Page from '../../components/Page'
import { VStack } from '../../components/Stack'
import theme from '../../components/theme'

const Green = styled.div`
  color: ${theme.colors.green};
`

const SubscribeThanks = () => (
  <Page title="Almost subscribed!">
    <VStack space={2}>
      <P>Please check your email to confirm.</P>
      <Hr />
      <P>
        <Link href="/posts" passHref>
          <a>← Back to Posts</a>
        </Link>
      </P>
    </VStack>
  </Page>
)

export default SubscribeThanks

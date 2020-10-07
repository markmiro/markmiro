import React from "react"
import { Link } from "gatsby"

import Hr from "../../components/Hr"
import P from "../../components/P"
import Page from "../../components/Page"
import { VStack } from "../../components/Stack"

const SubscribeThanks = () => (
  <Page title="Almost subscribed!">
    <VStack space={2}>
      <P>Please check your email to confirm.</P>
      <Hr />
      <P>
        <Link to="/posts">← Back to Posts</Link>
      </P>
    </VStack>
  </Page>
)

export default SubscribeThanks

// NOTE: Keep the route for this file consistent with ConvertKit
// https://app.convertkit.com/forms/designers/1661175/edit
// Click "Settings" -> "General" -> When a visitor subscribes to the form: Redirect to an external page
// Fill in the field with the route for this page

import React from "react"
import { Link } from "gatsby"

import Hr from "../components/Hr"
import P from "../components/P"
import Page from "../components/Page"
import { VStack } from "../components/Stack"

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

import React from "react"

import Heading, { Section, HeadingSizeContext } from "../../components/Heading"

import Headings from "./headings"
import Theme from "./theme"
import Svg from "./svg"
import Layout from "../../components/Layout"

const Headed = ({ title, children }) => (
  <Section>
    <Heading>{title}</Heading>
    {children}
  </Section>
)

export default function Stories() {
  return (
    <Layout>
      <Headed title="<Headings />">
        <HeadingSizeContext.Provider value={0}>
          <Headings />
        </HeadingSizeContext.Provider>
      </Headed>
      <Headed title="<SVG />">
        <Svg />
      </Headed>
      <Headed title="<Theme />">
        <Theme />
      </Headed>
    </Layout>
  )
}

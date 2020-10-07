import React from "react"
import { Helmet } from "react-helmet"

import content from "./_siteContent"

const Head2 = ({
  title,
  description = !title && content.siteDescription,
  pageType = "website" /* Can also be "article" */,
  image = content.siteImage,
}) => {
  const fullTitle = title ? `${title} | ${content.siteName}` : content.siteName
  return (
    <Helmet title={fullTitle}>
      {/*
        Generated with: https://favicon.io
        Font size: 88
        Font: Montserrat
      */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      {/* MetaTags */}
      {/* Generated from https://metatags.io */}
      {/* ---- Primary Meta Tags ---- */}
      {/* <title>{title}</title> */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* ---- Open Graph / Facebook ---- */}
      <meta property="og:type" content={pageType} />
      {/* <meta property="og:url" content="" /> */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      {/* ---- Twitter ---- */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content="" /> */}
      <meta name="twitter:creator" content="@markmiro" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}

export default Head2

import content from './_siteContent'

// TODO: consider breaking up into components MetaTitle, MetaDescription, MetaImage

const MetaTags = ({
  title = content.siteName,
  description = content.siteDescription,
  pageType = 'website' /* Can also be "article" */,
  image = content.siteImage,
}) => (
  <>
    {/* Generated from https://metatags.io */}
    {/* ---- Primary Meta Tags ---- */}
    {/* <title>{title}</title> */}
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    {/* ---- Open Graph / Facebook ---- */}
    <meta property="og:type" content={pageType} />
    {/* <meta property="og:url" content="" /> */}
    <meta property="og:title" content={title} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={description} />

    {/* ---- Twitter ---- */}
    <meta property="twitter:card" content="summary_large_image" />
    {/* <meta property="twitter:url" content="" /> */}
    <meta name="twitter:creator" content="@markmiro" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </>
)

export default MetaTags

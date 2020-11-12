const path = require(`path`)

// Async/await
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  console.log(result.data.allMdx.nodes)

  result.data.allMdx.nodes.forEach(node =>
    actions.createPage({
      path: `posts/${node.slug}`,
      component: path.resolve(`./src/templates/Post.js`),
      context: {
        id: node.id,
        // title: node.frontmatter.title,
      },
    })
  )
}

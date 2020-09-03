export function getPostBySlug(slug) {
  // const fullFilePath = join(postsDirectory, slug + extension.mdx)
  // const fileContents = fs.readFileSync(fullFilePath, 'utf8')
  return {
    slug,
    // fullFilePath,
    // fileContents,
  }
}

export function getAllPosts() {
  return ['first-post', 'another-post', 'third'].map(getPostBySlug)
}

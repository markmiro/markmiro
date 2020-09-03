import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

const extension = {
  stripMd: (fileName) => fileName.replace(/\.md$/, ''),
  md: '.md',
}

export function getPostBySlug(slug) {
  const fullFilePath = join(postsDirectory, slug + extension.md)
  const fileContents = fs.readFileSync(fullFilePath, 'utf8')
  return {
    slug,
    fullFilePath,
    fileContents,
  }
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDirectory)
    .map(extension.stripMd)
    .map(getPostBySlug)
}

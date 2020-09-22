const visit = require('unist-util-visit')
const remove = require('unist-util-remove')
const yaml = require('yaml')

function extractFrontmatter() {
  return function transformer(tree, file) {
    visit(tree, 'yaml', function visitor(node) {
      file.data.frontmatter = yaml.parse(node.value)
    })
    remove(tree, 'yaml')
  }
}

module.exports = extractFrontmatter

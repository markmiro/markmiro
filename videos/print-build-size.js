const fsUtils = require('nodejs-fs-utils')
const format = require('human-format')

// Print total size of build dir
function printBuildSize() {
  const size = fsUtils.fsizeSync('./build')
  const formatted = format.bytes(size)

  console.log('Build dir size:')
  console.log(formatted)
  console.log(
    'Make sure the size work within the limits on the Vercel website: https://vercel.com/docs/platform/limits#serverless-function-size'
  )
}

module.exports = printBuildSize

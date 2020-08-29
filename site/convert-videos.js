const fs = require('fs')
const path = require('path')
const { execSync, execFileSync } = require('child_process')
const fsUtils = require('nodejs-fs-utils')
const format = require('human-format')

const inputDir = '../resources/videos'

// Remove build dir and re-create it
execSync(`cd ${inputDir} && rm -rf build && mkdir build`)

const files = fs.readdirSync(path.join(inputDir, 'src'))

// Convert each video
files.map((file) => {
  const fileWithoutExt = path.basename(file, '.mov')
  execFileSync('./convert-video.sh', [inputDir, fileWithoutExt])
})

// ------------
// PREBUILD

// Remove prebuilt files and dirs
fs.rmdirSync('./public/prebuild', { recursive: true })

// Add dirs back
fs.mkdirSync('./public/prebuild')
fs.mkdirSync('./public/prebuild/videos')

// Copy videos into new directory
execSync(`cp ${inputDir}/build/* ./public/prebuild/videos`)

// ------------

console.log('DONE!')

// Print total size of build dir
const size = fsUtils.fsizeSync('../markmiro-videos/build')
const formatted = format.bytes(size)
console.log('Build dir size:')
console.log(formatted)
console.log(
  'Make sure the size work within the limits on the Vercel website: https://vercel.com/docs/platform/limits#serverless-function-size'
)

const fs = require('fs')
const path = require('path')
const process = require('process')
const { execFileSync, exec } = require('child_process')

const printBuildSize = require('./print-build-size')

console.log(process.cwd())
exec('pwd', { cwd: __dirname }, (err, stdout) => {
  if (err) console.error(err)
  console.log(stdout)
})

// Remove build dir and re-create it
execFileSync('./reset.sh')

const files = fs.readdirSync('./src')

// // Convert each video
files.map((file) => {
  const fileWithoutExt = path.basename(file, '.mov')
  execFileSync(`./convert-video.sh`, [fileWithoutExt])
})

console.log('DONE CONVERTING!')

printBuildSize()

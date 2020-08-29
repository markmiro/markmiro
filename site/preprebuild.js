const { execSync } = require('child_process')

// ----
// CONVERT VIDEOS

// Do conversion
execSync('cd videos && yarn run convert-videos')

// Remove prebuilt files and dirs
fs.rmdirSync('./public/preprebuild', { recursive: true })

// Add dirs back
fs.mkdirSync('./public/preprebuild/videos')

// Copy built videos into new directory
execSync('cp ../videos/build/* ./public/prebuild/videos')

// ----

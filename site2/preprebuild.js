const fs = require("fs")
const { execSync } = require("child_process")

// ----
// CONVERT VIDEOS

// Do conversion
execSync("cd ../videos && yarn run convert-videos")

// Remove prebuilt files and dirs
fs.rmdirSync("./static/preprebuild", { recursive: true })

// Add dirs back
fs.mkdirSync("./static/preprebuild/videos", { recursive: true })

// Copy built videos into new directory
execSync("cp ../videos/build/* ./static/preprebuild/videos")

// ----

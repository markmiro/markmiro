const fs = require("fs")

const now = Date.now()
if (!fs.existsSync("./src/prebuild")) {
  fs.mkdirSync("./src/prebuild")
}
fs.writeFileSync("./src/prebuild/date-updated.json", JSON.stringify(now))

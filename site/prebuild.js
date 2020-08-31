const fs = require('fs')

const now = Date.now()
if (!fs.existsSync('./prebuild')) {
  fs.mkdirSync('./prebuild')
}
fs.writeFileSync('./prebuild/date-updated.json', JSON.stringify(now))

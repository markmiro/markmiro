const fs = require('fs')

const now = Date.now()
fs.writeFileSync('./prebuild/date-updated.json', JSON.stringify(now))

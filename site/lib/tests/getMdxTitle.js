const { getMdxTitle } = require('../getMdxTitle')

const file = `
export const title = 'This is the title (exported)';

# This is the title

Some paragraph

## This is a heading

Another paragraph

`

console.log(getMdxTitle(file))

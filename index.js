const fs = require('fs')
const lockfile = require('yarn-lockfile')

let file = fs.readFileSync('sample/yarn.lock', 'utf8')
let json = lockfile.parse(file)

console.log(json)

let fileAgain = lockfile.stringify(json)

console.log(fileAgain)

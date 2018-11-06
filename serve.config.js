const fs = require('fs')
const convert = require('koa-connect')
const history = require('connect-history-api-fallback')

function exist(file) {
  try {
    fs.accessSync(file)
    return true
  } catch (err) {
    return false
  }
}

const https = {
  key: './localhost-key.pem',
  cert: './localhost.pem'
}

const config = {
  add: app => app.use(convert(history())),
  content: [__dirname],
  devMiddleware: {
    stats: 'none'
  }
}

if (exist(https.key) || exist(https.cert)) {
  config.https = {
    key: fs.readFileSync(https.key),
    cert: fs.readFileSync(https.cert)
  }
}

module.exports = config

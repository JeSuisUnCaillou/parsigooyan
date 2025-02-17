const express = require('express')
const path = require('path')
var history = require('connect-history-api-fallback')
const port = process.env.PORT || 8081
const isProd = process.env.NODE_ENV === 'production'

const app = express()

// Allow CORS in development & test
if (!isProd) {
  console.log('Allow CORS requests')
  const cors = require('cors')
  app.use(cors())
}

// Redirect to https in production
app.use(function (request, response, next) {
  if (isProd && !(request.headers['x-forwarded-proto'] === 'https' || request.secure)) {
    const newUrl = 'https://' + request.headers.host + request.url
    response.redirect(newUrl)
  } else {
    next()
  }
})

// Backend endpoints
var routes = require('./api/routes.cjs')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app)

// Static frontend
app.use(history())
app.use('/', express.static(path.join(__dirname, 'dist')))

const server = app.listen(port, () => {
  console.log('App is running on port ' + port)
})

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: gracefully shutting down')
  if (server) {
    server.close(() => {
      console.log('HTTP server closed')
    })
  }
})

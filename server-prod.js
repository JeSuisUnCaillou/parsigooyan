import express from 'express'
import path from 'path'
import history from 'connect-history-api-fallback'
import routes from './api/routes.js'
import bodyParser from 'body-parser'

const port = process.env.PORT || 8081
const isProd = process.env.NODE_ENV === 'production'
const app = express()

// Allow CORS in development & test
if (!isProd) {
  const cors = await import('cors')
  console.log('Allow CORS requests')
  app.use(cors.default())
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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app)

// Static frontend
app.use(history())
app.use('/', express.static(path.join(process.cwd(), 'dist')))

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

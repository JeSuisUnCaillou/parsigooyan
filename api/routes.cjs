'use strict'

const dictionnary = require('./dictionnary.cjs')

module.exports = (app) => {
  app.get('/api/ping', (req, res) => {
    res.send({ message: 'pong' })
  })

  app.get('/api/find', async (req, res) => {
    res.send(await dictionnary.find(req.query.q))
  })

  app.get('/api/letters', (req, res) => {
    res.send({
      letters: dictionnary.letters()
    })
  })

  app.get('/api/letter/:sign', async (req, res) => {
    res.send({
      definitions: await dictionnary.definitions_of_letter(req.params.sign)
    })
  })
}

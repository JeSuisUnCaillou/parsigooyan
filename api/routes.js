import dictionnary from './dictionnary.js'

export default (app) => {
  app.get('/api/ping', (req, res) => {
    console.log('GET ' + req.url)
    res.send({ message: 'pong' })
  })

  app.get('/api/find', async (req, res) => {
    console.log('GET ' + req.url)
    res.send(await dictionnary.find(req.query.q))
  })

  app.get('/api/letters', (req, res) => {
    console.log('GET ' + req.url)
    res.send({
      letters: dictionnary.letters()
    })
  })

  app.get('/api/letter/:character', async (req, res) => {
    console.log('GET ' + req.url)
    res.send({
      definitions: await dictionnary.definitions_of_letter(req.params.character)
    })
  })

  app.get('/api/word-of-the-day', (req, res) => {
    console.log('GET ' + req.url)
    res.send(dictionnary.word_of_the_day())
  })

  app.get('/api/word-of-the-date/:date', (req, res) => {
    console.log('GET ' + req.url)
    const result = dictionnary.word_of_the_date(req.params.date)
    if (result.error) {
      res.status(400).send(result)
    } else {
      res.send(result)
    }
  })
}

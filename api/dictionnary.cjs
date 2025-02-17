'use strict'
const fs = require('fs')

const filename = 'api/dictionnary_2021_06_07.json'
const dictionnary = JSON.parse(fs.readFileSync(filename))
console.log(`${dictionnary.length} words loaded`)

const letters = dictionnary.reduce((letters, definition) => {
  if(!(definition.letter in letters)) {
    letters[definition.letter] = 1
  } else {
    letters[definition.letter] += 1
  }
  return letters
}, {})

console.log(`${Object.keys(letters).length} letters loaded`)

const farsi_search = require('./farsi_search.cjs')(dictionnary)

module.exports = {
  async find (word) {
    var definitions = farsi_search.search_without_accents(word)
    const nbDefinitions = definitions.length

    return {
      nbDefinitions,
      definitions
    }
  },
  letters () {
    return Object.entries(letters).map((letter_and_count) => {
      const sign = letter_and_count[0]
      const count = letter_and_count[1]
      return { sign, count }
    })
  },
  async definitions_of_letter (sign, user_id) {
    let definitions = dictionnary.filter((definition) => {
      return definition.letter === sign
    })

    return definitions
  }
}

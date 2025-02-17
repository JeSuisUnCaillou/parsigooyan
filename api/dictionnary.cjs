'use strict'

const fs = require('fs')
const letterReplacements = require('./letter_replacements.cjs')

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

const normalizePersian = (word) => {
  var newWord = word

  for (var letter in letterReplacements) {
    const replacements = letterReplacements[letter].join('|')
    const regex = new RegExp(`(${replacements})`, 'g')
    newWord = newWord.normalize().replace(regex, letter)
  }

  return newWord
}

module.exports = {
  async find (word) {
    const foreignResults = dictionnary.filter((definition) => {
      return normalizePersian(definition.foreign_word).includes(normalizePersian(word))
    })
    const persianResults = dictionnary.filter((definition) => {
      return normalizePersian(definition.persian_word).includes(normalizePersian(word))
    })

    var definitions = [...foreignResults, ...persianResults]
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

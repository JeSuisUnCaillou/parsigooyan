import fs from 'fs'
import farsi_search from './farsi_search.js'

const filename = 'api/dictionnary_2025_03_05.json'
const dictionnary = JSON.parse(fs.readFileSync(filename))
const search = farsi_search(dictionnary).fuzzy_search

console.log(`${dictionnary.length} words loaded`)
const letters_order = 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی'

const letters_hash = dictionnary.reduce((letters, definition) => {
  if(!(definition.letter in letters)) {
    letters[definition.letter] = 1
  } else {
    letters[definition.letter] += 1
  }
  return letters
}, {})

const letters = Object.entries(letters_hash).map((letter_and_count) => {
  const character = letter_and_count[0]
  const count = letter_and_count[1]
  return { character, count }
}).sort((a, b) => letters_order.indexOf(a.character) - letters_order.indexOf(b.character))

console.log(`${Object.keys(letters).length} letters loaded`)


// Simple hash function to scramble a number deterministically
function hashNumber(n) {
  // Use a simple but effective mixing function
  n = ((n >> 16) ^ n) * 0x45d9f3b
  n = ((n >> 16) ^ n) * 0x45d9f3b
  n = (n >> 16) ^ n
  return Math.abs(n)
}

// Generate a deterministic but scattered index based on the date
function getDateSeed(date = new Date()) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  // Combine year, month, day then hash to scatter consecutive days
  const dateSeed = year * 10000 + (month + 1) * 100 + day
  return hashNumber(dateSeed)
}

export default {
  async find (word) {
    var definitions = search(word)
    const nbDefinitions = definitions.length

    return {
      nbDefinitions,
      definitions
    }
  },
  letters () {
    return letters
  },
  async definitions_of_letter (character) {
    let definitions = dictionnary.filter((definition) => {
      return definition.letter === character
    })

    return definitions
  },
  word_of_the_day () {
    const seed = getDateSeed()
    // Use modulo to get an index within the dictionary bounds
    const index = seed % dictionnary.length
    const word = dictionnary[index]
    return {
      ...word,
      date: new Date().toISOString().split('T')[0]
    }
  }
}

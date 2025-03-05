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
  }
}

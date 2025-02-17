const letterReplacements = require('./letter_replacements.cjs')

const normalizePersian = (word) => {
  var newWord = word

  for (var letter in letterReplacements) {
    const replacements = letterReplacements[letter].join('|')
    const regex = new RegExp(`(${replacements})`, 'g')
    newWord = newWord.normalize().replace(regex, letter)
  }

  return newWord
}

module.exports = (dictionnary) => {
  return {
    search_without_accents: (word) => {
      const foreignResults = dictionnary.filter((definition) => {
        return normalizePersian(definition.foreign_word).includes(normalizePersian(word))
      })
      const persianResults = dictionnary.filter((definition) => {
        return normalizePersian(definition.persian_word).includes(normalizePersian(word))
      })

      return [...foreignResults, ...persianResults]
    }
  }
}
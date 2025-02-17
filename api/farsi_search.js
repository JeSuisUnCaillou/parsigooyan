import Fuse from 'fuse.js'
import letterReplacements from './letter_replacements.js'

const fuseOptions = {
	// isCaseSensitive: false,
	// includeScore: false,
	ignoreDiacritics: true,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		'foreign_word',
    'persian_word',
		'explanation',
	]
}

const normalizePersian = (word) => {
  var newWord = word

  for (var letter in letterReplacements) {
    const replacements = letterReplacements[letter].join('|')
    const regex = new RegExp(`(${replacements})`, 'g')
    newWord = newWord.normalize().replace(regex, letter)
  }

  return newWord
}

export default (dictionnary) => {
  const fuse = new Fuse(dictionnary, fuseOptions)

  return {
    fuzzy_search: (word) => {
      const results = fuse.search(word)
      return results.slice(0,20).map(result => { return result.item })
    },
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
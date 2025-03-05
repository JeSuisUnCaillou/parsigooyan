import { describe, it, expect } from 'vitest'
import dictionnary from '../dictionnary.js'

describe('dictionnary.letters()', () => {
  it('loads all the letters', () => {
    expect(dictionnary.letters().length).toBe(33)
  })

  it('has 97 definitions for the first letter', () => {
    expect(dictionnary.letters()[0]).toEqual({ character: 'آ', count: 97 })
  })

  it('has the letters in the alphabetical order', () => {
    expect(dictionnary.letters().map(o => o.character).join(' ')).toBe('آ ا ب پ ت ث ج چ ح خ د ذ ر ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن و ه ی')
  })
})

describe('dictionnary.definitions_of_letter()', () => {
  it('finds the definitions for the letter "ظ"', async () => {
    const result = await dictionnary.definitions_of_letter('ظ')
    expect(result.length).toBe(21)
  })
})

describe('dictionnary.find()', () => {
  it('finds the exact foreign word "عجب" in the dictionnary', async () => {
    const result = await dictionnary.find('عجب')
    expect(result.nbDefinitions).toBeGreaterThan(5)
    expect(result.definitions[0].foreign_word).toBe('عجب')
  })

  it('finds the partial foreign word "اکبر" in the dictionnary', async () => {
    const result = await dictionnary.find('اکبر')
    expect(result.nbDefinitions).toBeGreaterThan(3)
    expect(result.definitions.map(r => r.foreign_word)).toContain('دُب اکبر')
  })

  it('finds the partial foreign word "اصغر" in the dictionnary', async () => {
    const result = await dictionnary.find('اصغر')
    expect(result.nbDefinitions).toBeGreaterThan(1)
    expect(result.definitions[0].foreign_word).toBe('دُب اصغر')
  })

  const search_couples = [
    { without_accents: 'بالکل', with_accents: 'بالکُل' },
    { without_accents: 'سراط', with_accents: 'سَراط' },
    { without_accents: 'طالش', with_accents: 'طالِش' },
    { without_accents: 'غرفه', with_accents: 'غُرفه' },
  ]
  
  search_couples.forEach((search_couple) => {
    const { without_accents, with_accents } = search_couple

    it(`finds the foreign word "${without_accents}" in the dictionnary without its accents`, async () => {
      const result_without_accents = await dictionnary.find(without_accents)
      expect(result_without_accents.definitions[0].foreign_word).toBe(with_accents)
    })

    it(`finds the foreign word "${with_accents}" in the dictionnary with its accents`, async () => {
      const result_with_accents = await dictionnary.find(with_accents)
      expect(result_with_accents.definitions[0].foreign_word).toBe(with_accents)
    })
  })

  it('finds the exact word "پرسش" in the definition of a foreign word', async () => {
    const result = await dictionnary.find('پرسش')
    expect(result.definitions[0].foreign_word).toBe('سؤال')
  })
})
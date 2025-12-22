import { defineStore } from 'pinia'
import axios from 'axios'
const backendUrl = import.meta.env.VITE_APP_BACKEND_URL

export const useDefinitionsStore = defineStore('definitions', {
  state: () => ({
    searchQuery: null,
    definitions: null,
    nbDefinitions: null,
    letters: null,
    wordOfTheDay: null
  }),

  getters: {
    totalNbDefinitionsOfLetter: () => (letter) => {
      if (this.letters) {
        return this.letters.find(h => h.character === letter).count
      } else {
        return 0
      }
    }
  },

  actions: {
    setSearchQuery (query) {
      this.searchQuery = query
    },
    async search (word) {
      this.definitions = null
      this.nbDefinitions = null
      const result = await axios.get(`${backendUrl}api/find?q=${word}`)
      this.definitions = result.data.definitions
      this.nbDefinitions = result.data.nbDefinitions
    },
    async getLetters () {
      const result = await axios.get(`${backendUrl}api/letters`)
      this.letters = result.data.letters
    },
    async get_definitions_of_letter (params) {
      const { letter } = params
      const result = await axios.get(`${backendUrl}api/letter/${letter}`)
      return result.data.definitions
    },
    async fetchWordOfTheDay () {
      const result = await axios.get(`${backendUrl}api/word-of-the-day`)
      this.wordOfTheDay = result.data
    },
    async fetchWordOfTheDate (date) {
      const result = await axios.get(`${backendUrl}api/word-of-the-date/${date}`)
      return result.data
    }
  }
})
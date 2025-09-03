<template>
  <div class="search-container">
    <div class="clear-search" @click="clearSearch" v-show="inputSearch">
      <img src="@/assets/circle-cross.svg" class="close-icon"/>
    </div>
    <input
      class="search-bar right-to-left"
      v-model="inputSearch"
      placeholder="جستجو کنید"
      ref="search"
      @keyup.enter="searchInput"
    />
    <div class="search-icon-container" @click="searchInput">
      <img src="@/assets/search.svg" class="search-icon"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDefinitionsStore } from '@/stores/definitions.js'

const router = useRouter()
const store = useDefinitionsStore()
const search = ref(null)
const inputSearch = ref(null)

function cleanInput() {
  inputSearch.value = inputSearch.value.trim()
}

function searchInput() {
  if (inputSearch.value) {
    cleanInput()
    store.setSearchQuery(inputSearch.value)
    router.push({ name: 'SearchResults', query: { q: inputSearch.value } })
    search.value.blur()
  } else {
    search.value.focus()
  }
}

function clearSearch() {
  inputSearch.value = null
  search.value.focus()
}
</script>

<style lang="scss" scoped>
.search-container {
  background: linear-gradient(90deg, #{$bg-gold-light}, #{$bg-gold});
  display: flex;
  align-items: center;
  height: 100%;
  max-height: $navbar-height;
  flex-grow: 1;
  height: $navbar-height;
}

.search-bar {
  background-color: transparent;
  outline: none;
  border: none;
  color: $txt-color;
  width: 100%;
  padding: 15px;
  padding-left: 55px; // size of the search icon
  font-size: 1.5rem;

  &:hover, &:focus {
    background-color: $lighter;
  }

  &::placeholder {
    color: $txt-color-light;
  }
}

.clear-search {
  cursor: pointer;
  padding: 0 15px;
  height: 100%;
  max-height: $navbar-height;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  &:hover, &:focus {
    background-color: $darker;
  }

  .close-icon {
    height: 25px;
  }
}

.search-icon {
  height: 25px;
  padding: 0 15px;
}

.search-icon-container {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-icon-container:hover {
  background-color: $lighter;
}
</style>
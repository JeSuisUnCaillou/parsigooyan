<template>
  <div class="navbar">
    <navbar-menu />

    <RouterLink :to="{ name: 'Home' }"
                  class="nav-link brand">
      <img src="/logo_bouquetin_150x150.png" class="brand-icon" />
      <span class="brand-title title-font">
        Parsigooyan
      </span>
    </RouterLink>

    <div class="search-container">
      <div  class="clear-search"
            @click="clearSearch">
        <img src="@/assets/circle-cross.svg" class="close-icon"/>
      </div>
      <input  class="search-bar"
              v-model="inputSearch"
              placeholder="Search a word"
              ref="search"
              @keyup.enter="searchInput"/>
      <div  class="search-icon-container"
            @click="searchInput">
        <img  src="@/assets/search.svg"
              class="search-icon"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarMenu from '@/components/NavbarMenu.vue'
import { useTemplateRef, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDefinitionsStore } from '@/stores/definitions.js'
const router = useRouter()
const store = useDefinitionsStore()
const search = useTemplateRef('search')
const inputSearch = ref(null)

function cleanInput () {
  inputSearch.value = inputSearch.value.trim()
}

function searchInput () {
  if (inputSearch.value) {
    cleanInput()
    store.setSearchQuery(inputSearch.value)
    router.push({ name: 'SearchResults', query: { q: inputSearch.value } })
    search.value.blur()
  } else {
    search.value.focus()
  }
}

function clearSearch () {
  inputSearch.value = null
  search.value.focus()
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $bg-color;
  color: $txt-color;

  display: flex;
  align-items: center;
  font-size: 1.5rem;
  position: fixed;
  height: $navbar-height;
  width: 100%;
  top: 0;
  z-index: 10;
}

.search-container {
  background: linear-gradient(90deg, #{$bg-gold-light}, #{$bg-gold});
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;
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

  text-align: right;
  direction: rtl;
}

.clear-search {
  cursor: pointer;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  &:hover, &:focus {
    background-color: $lighter;
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

.nav-link {
  color: $txt-color;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-right: 20px;

  .brand-icon {
    height: 50px;
    padding-right: 10px;
  }
}

@media (max-width: 576px) {
  .brand {
    display: none;
  }

  .nav-link {
    padding: 0;
  }
  .nav-link .brand-icon {
    padding: 0 4px;
  }
}
</style>

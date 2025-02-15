<template>
  <div class="navbar">
    <navbar-menu />

    <router-link :to="{ name: 'Home' }"
                  class="nav-link brand">
      <img src="/logo_bouquetin_150x150.png" class="brand-icon" />
      <span class="brand-title title-font">
        Parsigooyan
      </span>
    </router-link>

    <div class="search-container">
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

<script>
import NavbarMenu from '@/components/NavbarMenu.vue'

export default {
  name: 'navbar',
  components: { NavbarMenu },
  data () {
    return {
      inputSearch: null
    }
  },
  methods: {
    // ...mapMutations('definitions', ['setSearchQuery']),
    cleanInput () {
      this.inputSearch = this.inputSearch.trim()
    },
    searchInput () {
      if (this.inputSearch) {
        this.cleanInput()
        this.setSearchQuery(this.inputSearch)
        // this.$router.push({ name: 'SearchResults', query: { q: this.inputSearch } })
        this.$refs.search.blur()
      } else {
        this.$refs.search.focus()
      }
    }
  }
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
  font-size: 1.5rem;

  &:hover, &:focus {
    background-color: $lighter;
  }

  &::placeholder {
    color: $txt-color-light;
  }

  text-align: right;
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

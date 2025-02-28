<template>
  <div class="navbar">
    <navbar-menu />

    <RouterLink :to="{ name: 'Home' }" class="nav-link brand">
      <img src="/logo_bouquetin_150x150.png" class="brand-icon" />
      <span class="brand-title title-font">
        Parsigooyan
      </span>
    </RouterLink>

    <SearchBar />
  </div>
</template>

<script setup>
import NavbarMenu from '@/components/NavbarMenu.vue'
import SearchBar from '@/components/SearchBar.vue'
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
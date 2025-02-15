<script setup>
import { RouterView } from 'vue-router'
import NavFooter from './components/NavFooter.vue'
import NavBar from './components/Navbar.vue'
</script>

<template>
  <NavBar />
  <RouterView class="content" />
  <NavFooter />
</template>

<style scoped>

</style>

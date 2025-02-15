<script setup>
import { RouterView } from 'vue-router'
import { useDefinitionsStore } from '@/stores/definitions.js'
import NavFooter from './components/NavFooter.vue'
import NavBar from './components/Navbar.vue'

const store = useDefinitionsStore()
store.getLetters()
</script>

<template>
  <NavBar />
  <RouterView class="content" />
  <NavFooter />
</template>

<style scoped>
</style>

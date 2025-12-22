<template>
  <div class="content search-results">
    <back-button position="top" />

    <h1 class="results-header">
      {{computed_title}}
    </h1>

    <Definitions :definitions="definitions"/>

    <back-button  position="bottom"
                  v-if="definitions && definitions.length > 5"/>
  </div>
</template>

<script setup>
import Definitions from '@/components/Definitions.vue'
import BackButton from '@/components/BackButton.vue'
import { useRoute } from 'vue-router'
import { useDefinitionsStore } from '@/stores/definitions.js'
import { computed, onMounted, watch } from 'vue'

const route = useRoute()
const store = useDefinitionsStore()
const definitions = computed(() => store.definitions)

const computed_title = computed(() => {
  return (store.nbDefinitions == 0 ? "0 r" : "R") + "esult" + (store.nbDefinitions > 1 ? 's' : '') + " for : " + route.query.q
})

onMounted(() => {
  store.search(route.query.q)
})

watch(() => route.query.q, (newQuery) => {
  store.search(newQuery)
})
</script>

<style lang="scss" scoped>
.results-header {
  padding: 0 20px;
  text-align: center;
}

.definitions-count {
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  background-color: $red;
  color: $txt-color;
  font-size: 1.2rem;
}
</style>

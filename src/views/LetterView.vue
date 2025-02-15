<template>
  <div>
    <back-button position="top" />

    <h1>{{route.params.letter}}</h1>

    <Definitions :definitions="definitions"/>

    <back-button position="bottom" v-if="definitions && definitions.length > 5"/>
  </div>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue'
import Definitions from '@/components/Definitions.vue'
import { useDefinitionsStore } from '@/stores/definitions.js'
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'


const store = useDefinitionsStore()
const route = useRoute()
const definitions = ref([])

onMounted(async () => {
  definitions.value = await store.get_definitions_of_letter({ letter: route.params.letter })
})

watch(() => route.params.letter, async (newLetter) => {
  definitions.value = null
  definitions.value = await store.get_definitions_of_letter({ letter: newLetter })
})
</script>

<style lang="scss" scoped>
h1 {
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

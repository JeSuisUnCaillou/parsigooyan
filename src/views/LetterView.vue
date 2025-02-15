<template>
  <div>
    <back-button position="top" />

    <h1>{{letter}}</h1>

    <!-- <definitions :definitions="definitions"/> -->
     {{ definitions }}

    <back-button position="bottom" v-if="store.definitions && store.definitions.length > 5"/>
  </div>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue'
import { useDefinitionsStore } from '@/stores/definitions.js'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'


const store = useDefinitionsStore()
const route = useRoute()
const letter = route.params.letter
const definitions = ref(null)

onMounted(async () => {
  definitions.value = await store.get_definitions_of_letter({ letter: letter })
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

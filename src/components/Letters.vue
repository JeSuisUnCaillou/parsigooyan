<template>
  <Loading v-if="store.letters === null" />

  <div v-else>
    <div class="total-title">
      {{ total_definitions }} definitions
    </div>

    <div class="letters">
      <RouterLink  v-for="letter in store.letters"
            :key="letter.character"
            class="letter"
            :to="{ name: 'Letter', params: { letter: letter.character } }">
        <h3>
          {{letter.character}}
        </h3>

        <div class="subtext">
          {{letter.count}} definitions
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDefinitionsStore } from '@/stores/definitions.js'
import Loading from '@/components/Loading.vue'

const store = useDefinitionsStore()

const total_definitions = computed(() => {
  if (store.letters) {
    return store.letters.reduce((acc, letter) => acc + letter.count, 0)
  } else {
    return 7857
  }
})
</script>

<style lang="scss" scoped>
.total-title {
  text-align: right;
  margin: 20px 0;
}

.letters {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.letter {
  text-align: center;
  background-color: $light-gray;
  color: $bg-color;
  padding: 10px;

  width: 135px;
  height: 100px;

  text-decoration: none;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}

.subtext {
  color: gray;
}
</style>

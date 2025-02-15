<template>
  <div class="letters">
    <router-link  v-for="letter in store.letters"
          :key="letter.sign"
          class="letter"
          :to="{ name: 'Letter', params: { letter: letter.sign } }">
      <h3>
        {{letter.sign}}
      </h3>

      <div class="subtext">
        {{letter.count}} definitions
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { useDefinitionsStore } from '@/stores/definitions.js'
const store = useDefinitionsStore()
</script>

<style lang="scss" scoped>
.letters {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.letter {
  text-align: center;
  background-color: $light-gray;
  color: $bg-color;
  padding: 10px;
  margin-top: 10px;

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

<template>
  <div class="word-of-the-day-card center-content">
    <div class="word-of-the-day-header">
      <h2 class="word-of-the-day-title">واژه روز</h2>
      <span class="word-of-the-day-subtitle">هر روز یک کلمه جدید برای یادگیری</span>
    </div>

    <ExampleCard
      v-if="wordOfTheDay"
      :farsi-word="wordOfTheDay.persian_word"
      :foreign-word="wordOfTheDay.foreign_word"
    />
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import ExampleCard from '@/components/ExampleCard.vue'
import { useDefinitionsStore } from '@/stores/definitions'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const definitionsStore = useDefinitionsStore()
const { wordOfTheDay } = storeToRefs(definitionsStore)

onMounted(() => {
  definitionsStore.fetchWordOfTheDay()
})
</script>

<style lang="scss" scoped>
.word-of-the-day-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px 40px;
  background: linear-gradient(135deg, rgba(213, 141, 51, 0.1) 0%, rgba(54, 52, 69, 0.05) 100%);
  border: 2px solid $bg-gold;
  border-radius: 16px;
  text-align: right;
  direction: rtl;
}

.word-of-the-day-title {
  font-size: 2rem;
}

.word-of-the-day-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.word-of-the-day-subtitle {
  margin-bottom: 20px;
}
</style>
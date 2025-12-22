<template>
  <div class="word-of-the-day-card center-content right-to-left">
    <div class="word-of-the-day-header">
      <h2 class="word-of-the-day-title">واژه روز</h2>
      <span class="word-of-the-day-subtitle">هر روز یک واژه تازه برای یادگیری</span>
    </div>

    <ExampleCard
      v-if="wordOfTheDay"
      :farsi-word="wordOfTheDay.persian_word"
      :foreign-word="wordOfTheDay.foreign_word"
    />
    <div v-else>
      <p>Loading...</p>
    </div>

    <RouterLink to="/word-of-the-date" class="see-more-link">
      واژه‌های پیشین روز را ببینید
    </RouterLink>
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
  margin: 0 auto;
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

.see-more-link {
  margin-top: 30px;
  display: inline-block;
  color: $bg-gold;
  font-weight: bold;
  text-decoration: none;
  transition: opacity 0.2s ease;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
}
</style>
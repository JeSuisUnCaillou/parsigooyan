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
    <Loading v-else class="loading" />

    <RouterLink :to="yesterdayLink" class="see-more-link">
      <button class="secondary-button">
        واژههای روزهای پیشین را ببینید
      </button>
    </RouterLink>
  </div>
</template>

<script setup>
import ExampleCard from '@/components/ExampleCard.vue'
import Loading from '@/components/Loading.vue'
import { useDefinitionsStore } from '@/stores/definitions'
import { storeToRefs } from 'pinia'
import { onMounted, computed } from 'vue'

const definitionsStore = useDefinitionsStore()
const { wordOfTheDay } = storeToRefs(definitionsStore)

const yesterdayLink = computed(() => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return `/word-of-the-date/${yesterday.toISOString().split('T')[0]}`
})

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
  margin-top: 60px;
}
</style>
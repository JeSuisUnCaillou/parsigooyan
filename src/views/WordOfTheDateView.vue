<template>
  <div class="content content-min-height word-of-the-date-view">
    <back-button position="top" />

    <h1 class="fade-in fade-in-1">واژه روز</h1>
    <p class="subtitle fade-in fade-in-2">هر روز یک کلمه جدید برای یادگیری</p>

    <div class="date-navigation fade-in fade-in-3">
      <button class="nav-button" @click="previousDay" :disabled="loading">
        قبلی
      </button>
      
      <div class="current-date">
        <input 
          type="date" 
          v-model="currentDate" 
          @change="onDateChange"
          class="date-input"
        />
      </div>
      
      <button class="nav-button" @click="nextDay" :disabled="loading || isToday">
        بعدی
      </button>
    </div>

    <div class="word-container fade-in fade-in-4">
      <div v-if="loading" class="loading">
        <p>Loading...</p>
      </div>
      <ExampleCard 
        v-else-if="wordOfTheDate"
        :farsi-word="wordOfTheDate.persian_word"
        :foreign-word="wordOfTheDate.foreign_word"
      />
      <div v-else class="error">
        <p>خطا در بارگذاری واژه</p>
      </div>
    </div>

    <div class="today-button-container fade-in fade-in-5" v-if="!isToday">
      <button class="today-button" @click="goToToday">
        برو به امروز
      </button>
    </div>
  </div>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue'
import ExampleCard from '@/components/ExampleCard.vue'
import { useDefinitionsStore } from '@/stores/definitions.js'
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'

const store = useDefinitionsStore()
const route = useRoute()
const router = useRouter()

const today = new Date().toISOString().split('T')[0]
const initialDate = route.params.date || today
const currentDate = ref(initialDate)
const wordOfTheDate = ref(null)
const loading = ref(false)

const isToday = computed(() => {
  return currentDate.value === today
})

function updateUrl(date) {
  router.replace({ name: 'WordOfTheDate', params: { date } })
}

async function fetchWord() {
  loading.value = true
  wordOfTheDate.value = null
  try {
    wordOfTheDate.value = await store.fetchWordOfTheDate(currentDate.value)
  } catch (error) {
    console.error('Error fetching word:', error)
  } finally {
    loading.value = false
  }
}

function navigateToDate(date) {
  currentDate.value = date
  updateUrl(date)
  fetchWord()
}

function previousDay() {
  const date = new Date(currentDate.value)
  date.setDate(date.getDate() - 1)
  navigateToDate(date.toISOString().split('T')[0])
}

function nextDay() {
  const date = new Date(currentDate.value)
  date.setDate(date.getDate() + 1)
  navigateToDate(date.toISOString().split('T')[0])
}

function goToToday() {
  navigateToDate(today)
}

function onDateChange() {
  updateUrl(currentDate.value)
  fetchWord()
}

watch(() => route.params.date, (newDate) => {
  if (newDate && newDate !== currentDate.value) {
    currentDate.value = newDate
    fetchWord()
  }
})

onMounted(() => {
  updateUrl(currentDate.value)
  fetchWord()
})
</script>

<style lang="scss" scoped>
.word-of-the-date-view {
  text-align: center;
}

h1 {
  margin-bottom: 10px;
  color: $bg-gold;
}

.subtitle {
  color: #666;
  margin-bottom: 40px;
}

.date-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  border: 2px solid $bg-gold;
  border-radius: 8px;
  color: $bg-gold;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: $bg-gold;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .arrow {
    font-size: 1.2rem;
  }
}

.current-date {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date-input {
  padding: 12px 20px;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  text-align: center;
  direction: ltr;
  
  &:focus {
    outline: none;
    border-color: $bg-gold;
  }
}

.word-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.loading, .error {
  padding: 40px;
  color: #666;
}

.error {
  color: #dc3545;
}

.today-button-container {
  margin-top: 20px;
}

.today-button {
  padding: 12px 32px;
  background: $bg-gold;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: darken($bg-gold, 10%);
  }
}

@media (max-width: 576px) {
  .date-navigation {
    gap: 15px;
  }

  .nav-button {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
}
</style>


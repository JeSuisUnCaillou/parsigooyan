<template>
  <div class="rotating-examples">
    <ExampleCard
      :farsi-word="currentExample.farsi_word"
      :foreign-word="currentExample.foreign_word"
      :animating="isAnimating"
    />
    
    <div class="example-dots">
      <span 
        v-for="(_, i) in examples" 
        :key="i"
        class="dot"
        :class="{ active: i === currentIndex }"
        @click="goToExample(i)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ExampleCard from '@/components/ExampleCard.vue'

const props = defineProps({
  examples: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const isAnimating = ref(false)
let intervalId = null

const currentExample = computed(() => props.examples[currentIndex.value])

function nextExample() {
  isAnimating.value = true
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % props.examples.length
    isAnimating.value = false
  }, 300)
}

function goToExample(index) {
  if (index === currentIndex.value) return
  isAnimating.value = true
  setTimeout(() => {
    currentIndex.value = index
    isAnimating.value = false
  }, 300)
}

onMounted(() => {
  intervalId = setInterval(nextExample, 3000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.rotating-examples {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.example-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ddd;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: lighten($bg-gold, 20%);
  }
  
  &.active {
    background: $bg-gold;
    transform: scale(1.3);
  }
}
</style>

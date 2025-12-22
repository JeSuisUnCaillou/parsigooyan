<template>
  <div class="rotating-examples">
    <div class="example-card" :class="{ animating: isAnimating }">
      <span class="rotating-word-text farsi-word">
        {{ currentExample.farsi_word }}
      </span>
      <img src="@/assets/left-arrow-tail.svg" class="arrow-icon"/>
      <span class="rotating-word-text foreign-word">
        {{ currentExample.foreign_word }}
      </span>
    </div>
    
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

.example-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px 40px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &.animating {
    opacity: 0;
    transform: scale(0.95);
  }
}

.arrow-icon {
  height: 20px;
  margin: 0 20px;
  animation: arrowPulse 2s ease-in-out infinite;
}

@keyframes arrowPulse {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-5px); }
}

.rotating-word-text {
  font-size: 2rem;
  
  @media screen and (max-width: 576px) {
    font-size: 1.4rem;
  }
}

.foreign-word {
  color: #999;
  text-decoration: line-through;
  text-decoration-color: rgba(220, 53, 69, 0.5);
}

.farsi-word {
  color: $bg-gold;
  font-weight: bold;
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

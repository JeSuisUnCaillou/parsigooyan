<template>
  <div class="example-card right-to-left" :class="{ animating, vertical: isVertical }">
    <span class="rotating-word-text foreign-word">
      {{ foreignWord }}
    </span>
    <img src="@/assets/left-arrow-tail.svg" class="arrow-icon"/>
    <span class="rotating-word-text farsi-word">
      {{ farsiWord }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  farsiWord: {
    type: String,
    required: true
  },
  foreignWord: {
    type: String,
    required: true
  },
  animating: {
    type: Boolean,
    default: false
  }
})

const isVertical = computed(() => {
  return props.farsiWord.length > 15 || props.foreignWord.length > 15
})
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

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

  &.vertical {
    flex-direction: column;
    text-align: center;

    .arrow-icon {
      transform: rotate(-90deg);
      margin: 15px 0;
      animation: arrowPulseVertical 2s ease-in-out infinite;
    }
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

@keyframes arrowPulseVertical {
  0%, 100% { transform: rotate(-90deg) translateX(0); }
  50% { transform: rotate(-90deg) translateX(-5px); }
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
</style>


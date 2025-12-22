<template>
  <div>
    <Loading v-if="definitions === null" />

    <div  v-for="(definition, index) in definitions"
          :key="index"
          :class="`definition fade-in fade-in-${index + 2}`">
      <div class="title">
        <h2 class="foreign-word" :with-explanation="definition.explanation">
          {{definition.foreign_word}}
        </h2>

        <div  v-if="definition.explanation"
              class="explanation">
          {{definition.explanation}}
        </div>
      </div>

      <div class="persian-word">
        {{definition.persian_word}}
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  name: 'definitions',
  props: ['definitions'],
  components: { Loading }
}
</script>

<style lang="scss" scoped>
.definition {
  padding: 20px;
  background-color: $light-gray;
  margin-top: 20px;
  text-align: right;
}

.title {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}

.foreign-word[with-explanation] {
  margin-left: 20px;
}

.explanation {
  color: gray;
}

.persian-word {
  padding: 10px 0;
}

</style>

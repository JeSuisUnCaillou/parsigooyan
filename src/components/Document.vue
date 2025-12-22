<template>
  <a :href="`/documents/${document.file}`"
     class="document">
    <img :src="`/document_pictures/${document.picture}`" 
         :alt="document.title" 
         class="document-picture" />
    <div class="document-text">
      <h2 class="document-title">{{ document.title }}</h2>
      <p v-if="document.description" class="document-description">
        {{ document.description }} ... 
        <span class="read-more">بیشتر بخوانید</span>
      </p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  document: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
@import '@/style/variables.scss';

.document {
  width: 100%;
  color: $bg-color;
  padding-bottom: 20px;
  text-align: right;
  display: block;
  background-color: white;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}

.document-picture {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center;
}

.document-text {
  padding: 20px;
}

.read-more {
  color: blue;
  text-decoration: underline;
}
</style>

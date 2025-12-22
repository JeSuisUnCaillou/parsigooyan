
<script setup>
import documentsData from '@/data/documents.json'
import Document from '@/components/Document.vue'
import BackButton from '@/components/BackButton.vue'

const documents = documentsData
</script>

<template>
  <div class="content documents-container content-min-height">
    <back-button position="top" />

    <h1 class="fade-in fade-in-1">
      نوشتار های زیر به زبان پارسی و بدون واژه های بیگانه
    </h1>
    <p class="fade-in fade-in-2">
      همه این نوشتار ها به پارسی ناب نوشته شده‌اند.
همه نمونه هایی روشن میباشند، در توانایی زبان ما ، و برای ما دشواری در خواندن ندارد.
    </p>

    <div class="documents">
      <Document 
        :class="`fade-in fade-in-${index + 3}`"
        v-for="(document, index) in documents"
        :key="document.title"
        :document="document"
      />
    </div>

    <back-button  position="bottom" />
  </div>
</template>

<style scoped lang="scss">
$document-gap: 50px;

.documents-container {
  text-align: right;
}

.documents {
  margin: 50px 0;

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: $document-gap;
}
</style>
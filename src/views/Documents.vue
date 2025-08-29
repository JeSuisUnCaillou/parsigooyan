
<script setup>
const documents = [
  {
    title: "اشردان راشفا",
    file: "نادر شاه افشار.pdf",
    picture: "نادر شاه افشار.jpeg",
    description: "در تاریخ ها آمده است که در جهان دو سردا ِر سرشناس هستند که در شایستگی و آشنا بود ِن به زیر و َبمِ جنگاوری نمونه می باشند"
  },
  {
    title: "محمد علی فروغی",
    file: "محمد علی فروغی_.pdf",
    picture: "محمد علی فروغی_.jpeg",
    description: ""
  },
  {
    title: "عطارن یشابوری",
    file: "عطار نیشابوری .pdf",
    picture: "عطار نیشابوری .jpeg",
    description: ""
  },
]
</script>

<template>
  <div>
    <h1>
      Articles écrits en Farsi sans mots étrangers
    </h1>
    <p>
      Voici une liste d'articles écrits en Farsi sans mots étrangers.
    </p>

    <div class="documents">
      <a  v-for="document in documents"
            :key="document.title"
            :href="`documents/${document.file}`"
            target="_blank"
            class="document">
        <img :src="`document_pictures/${document.picture}`" alt="document.title" class="document-picture" />
        <div class="document-text">
          <h2 class="document-title">{{ document.title }}</h2>
          <p v-if="document.description" class="document-description">
            {{ document.description }} ... 
            <span class="read-more">بیشتر بخوانید</span>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
$document-gap: 50px;

.documents {
  margin: 50px 0;

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: $document-gap;
}

.document {
  width: 100%;
  // background-color: $light-gray;
  color: $bg-color;
  padding-bottom: 20px;

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
  text-align: right;
}

.document-title {
  // text-align: right;
}

.document-description {
  // text-align: right;
}

.read-more {
  color: blue;
  text-decoration: underline;
}

</style>
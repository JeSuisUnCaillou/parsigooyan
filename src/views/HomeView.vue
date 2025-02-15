<script setup>
</script>

<template>
  <div class="home">
    <div class="title-container">
      <img src="@/assets/books.png" class="books"/>
      <div>
        <h1 class="title-font">
          Parsigooyan.org
        </h1>
        <div class="tagline">
          The only pocket dictionary of foreign words in Farsi
        </div>
      </div>
    </div>

    <!-- <letters /> -->

  </div>
</template>


<style lang="scss" scoped>
.home {
  padding: 20px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 500;
  }

  .tagline {
    margin-top: 10px;
    color: gray;
    font-size: .9rem;
  }

  .books {
    max-width: 100px;
    margin-right: 20px;
  }

  @media (max-width: 576px) {
    .books {
      max-width: 80px;
      margin-right: 10px;
    }

    h1 {
      font-size: 1.8rem;
    }
  }
}

</style>

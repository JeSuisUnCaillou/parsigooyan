<script setup>
import Letters from '@/components/Letters.vue'
import SearchBar from '@/components/SearchBar.vue';

const examples = [
  {
    foreign_word: "سلام",
    farsi_word: "درود"
  },
  {
    foreign_word: "عفو",
    farsi_word: "بخشودن"
  },
  {
    foreign_word: "خداحافظ",
    farsi_word: "خدا نگهدار یا بدرود"
  },
]
</script>

<template>
  <div class="home">
    <div class="title-container">
      <div>
        <h1 class="title-font right-to-left">
          Parsigooyan.org
        </h1>
        <div class="tagline right-to-left">
          تنها واژه نامه جیبی, برای جایگزینی واژه های خارجی با واژه های پارسی
        </div>
      </div>
      <img src="@/assets/books.png" class="books"/>
    </div>

    <div class="introduction">
      <div class="pure-farsi-sentence">
        <h2>
          اگر بشما بگویم که می‌توانید بدون بهره بردن از واژه های خارجی یا بیگانه، پارسی گویش کنید ، چه می‌اندیشید ؟
        </h2>
      </div>

      <p>
        این گفتار را فهمیدید ، نه ؟
      </p>
      <p>
        این نمونه ای است که بما نشان می‌دهد که می‌توانیم پارسی را بدون واژه های بیگانه بفهمیم 
      </p>

      <p>
        اینک تنها بایستی یاد بگیریم که چگونه با پارسی ناب گویش کنیم یا بنویسیم 
      </p>
    </div>
    
    <h2 class="section-title">
      چند نمونه برای آغاز کردن
    </h2>

    <div class="examples">
      <div v-for="example in examples"
            :key="example.foreign_word"
            class="example">
        
        <div class="foreign word">
          {{ example.foreign_word }}
        </div>
        <img  src="@/assets/left-arrow-tail.svg"
              class="arrow-icon"/>
        
        <div class="farsi word">
          {{ example.farsi_word }}
        </div>
      </div>
    </div>

    <h2 class="explore-title section-title">
      فرهنگ لغت را کاوش کنید
    </h2>

    <SearchBar class="search-container"/>

    <div class="letters-container">
      <Letters />
    </div>

  </div>
</template>


<style lang="scss" scoped>
.home {
  padding: 20px;
  text-align: center;
}

.section-title {
  margin-top: 100px;
  margin-bottom: 50px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;

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
    margin-left: 20px;
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

.introduction {
  margin: 50px 0;
  text-align: center;
}

.explore-title {
  text-align: center;
}

.pure-farsi-sentence {
  margin: 40px 0;
  padding: 20px 40px;
  background-color: $bg-color;
  color: $txt-color;
  font-weight: bold;
  width: 100%;
}

.examples {
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 0;
  }
}

.example {
  padding: 40px;
  background-color: $light-gray;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
}

.arrow-icon {
  height: 20px;
}

.word {
  padding: 20px;
  font-size: 1.8rem;
}

.search-container {
  margin: 30px 0;
}

</style>

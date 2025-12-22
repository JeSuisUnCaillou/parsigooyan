<script setup>
import Letters from '@/components/Letters.vue'
import SearchBar from '@/components/SearchBar.vue'
import Document from '@/components/Document.vue'

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

const document = {
  title: "جشن تیرگان",
  file: "تیرگان .pdf",
  picture: "تیرگان .jpeg",
  description: "تاریخ ایران باستان ُپر است از جشن ها و آیین هایی که هر یک داستانی شنیدنی دارد. جشن تیرگان یکی از ِمهین ترین این جشن ها می باشد، که در تیرماه برگزار می شود"
}
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="content">
        <div class="title-container">
          <div>
            <h1 class="title-font right-to-left">
              فارسی را 
              <span class="orange-text">
                دوباره
              </span> 
              یاد بگیرید
            </h1>
            <div class="tagline right-to-left">
              بیش از ۷۸۰۰ واژه پارسی برای جایگزینی واژه‌های خارجی
            </div>
          </div>
        </div>

        <SearchBar class="search-container"/>
      </div>
    </section>

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
      نوشتار هایی که در پایین، به زبان پارسی و بدون واژه های بیگانه نوشته شده است را بخوانید
    </h2>

    <Document :document="document" />

    <p class="read-more-container">
      <RouterLink to="/articles" class="read-more">
        <button class="read-more-button">
          نوشتارهای بیشتری را ببینید
        </button>
      </RouterLink>
    </p>

    <h2 class="explore-title section-title">
      فرهنگ‌ واژه ها را جستجو کنید
    </h2>

    <SearchBar class="search-container"/>

    <div class="letters-container">
      <Letters />
    </div>

  </div>
</template>


<style lang="scss" scoped>
.home {
  text-align: center;
}

.hero {
  background: radial-gradient(circle at 20% 80%, rgba(213, 141, 51, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(54, 52, 69, 0.1) 0%, transparent 50%);
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orange-text {
  color: $bg-gold;
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
    font-size: 3em;
    font-weight: 700;
  }

  .tagline {
    margin-top: 10px;
    color: gray;
    font-size: 1.2em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2em;
    }
    .tagline {
      font-size: 1em;
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
    padding: 20px
  }
}

.arrow-icon {
  height: 20px;
}

.word {
  padding: 20px;
  font-size: 1.8rem;

  @media screen and (max-width: 576px) {
    padding: 10px;
    font-size: 1.2rem;
  }
}

.search-container {
  margin: 30px 0;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.read-more-container {
  margin-top: 30px;
}

.read-more-button {
  background-color: $bg-gold;
  color: white;
  padding: 10px 50px;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: $bg-gold-light;
  }
}
</style>

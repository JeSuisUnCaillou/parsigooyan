<script setup>
import Letters from '@/components/Letters.vue'
import SearchBar from '@/components/SearchBar.vue'
import Document from '@/components/Document.vue'
import RotatingExamples from '@/components/RotatingExamples.vue'
import WordOfTheDay from '@/components/WordOfTheDay.vue'

const examples = [
  {
    // hello
    foreign_word: "سلام",
    farsi_word: "درود"
  },
  {
    // sorry
    foreign_word: "عفو",
    farsi_word: "بخشودن"
  }, 
  {
    // bye
    foreign_word: "خداحافظ",
    farsi_word: "بدرود"
  },
  {
    // thanks
    foreign_word: "ممنونم",
    farsi_word: "سپاسگزارم "
  },
  {
    // temps
    foreign_word: "وقت",
    farsi_word: "زمان"
  },
  {
    // heart
    foreign_word: "قلب",
    farsi_word: "دل"
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
      <div class="content center-content">
        <div class="title-container fade-in fade-in-1">
          <div>
            <h1 class="title-font right-to-left">
              فارسی را 
              <span class="orange-text">
                دوباره
              </span> 
              یاد بگیرید
            </h1>
            <div class="tagline right-to-left">
              بیش از ۷۷۰۰ واژه پارسی برای جایگزینی واژه‌های خارجی
            </div>
          </div>
        </div>

        <RotatingExamples :examples="examples" class="examples-container fade-in fade-in-2"/>

        <SearchBar class="search-container small-search fade-in fade-in-3"/>
      </div>
    </section>

    <section class="word-of-the-day-section content fade-in fade-in-4">
      <WordOfTheDay />
    </section>

    <section class="articles-section fade-in fade-in-5">
      <div class="content">
        <h2 class="articles-title">
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
      </div>
    </section>

    <section class="letters-section content fade-in fade-in-6">
      <h2 class="explore-title">
        فرهنگ‌ واژه ها را جستجو کنید
      </h2>

      <SearchBar class="search-container"/>

      <div class="letters-container">
        <Letters />
      </div>
    </section>

  </div>
</template>


<style lang="scss" scoped>
.home {
  text-align: center;
  margin-bottom: 100px;
}

.hero {
  background: radial-gradient(circle at 20% 80%, rgba(213, 141, 51, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(54, 52, 69, 0.1) 0%, transparent 50%);
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.articles-section {
  background: linear-gradient(135deg, rgba(54, 52, 69, 0.02) 0%, rgba(213, 141, 51, 0.05) 100%);
  padding-bottom: 50px;
}

.examples-container {
  margin: 30px 0;
}

.orange-text {
  color: $bg-gold;
}

.articles-title {
  margin-top: 50px;
  margin-bottom: 50px;
}

.explore-title {
  margin-bottom: 50px;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.explore-title {
  text-align: center;
}

.small-search {
  width: 500px;
}
@media (max-width: 576px) {
  .small-search {
    width: 100%;
  }
}

.search-container {
  margin: 30px 0;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.read-more-container {
  margin-top: 60px;
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

.word-of-the-day-section {
  text-align: center;
}
</style>


<script setup>
const documents = [
  {
    title: "نادرشاه افشار",
    file: "نادر شاه افشار.pdf",
    picture: "نادر شاه افشار.jpeg",
    description: "در تاریخ ها آمده است که در جهان دو سردا ِر سرشناس هستند که در شایستگی و آشنا بود ِن به زیر و َبمِ جنگاوری نمونه می باشند"
  },
  {
    title: "محمد علی فروغی",
    file: "محمد علی فروغی_.pdf",
    picture: "محمد علی فروغی_.jpeg",
    description: "نوشته ها و کارهای مهینی که محمد علی فروغی برای ایران کرده است: نگارش و یا برگردان برخی از نخستین نَسک (کتاب) های دانشی به زبان پارسی"
  },
  {
    title: "عطار نیشابوری",
    file: "عطار نیشابوری .pdf",
    picture: "عطار نیشابوری .jpeg",
    description: "در سالشمار ایرانی روز ۲۵ فروردین (۱۳ آوریل) روز بزرگداشت عطار نیشابوری برگزید شده است. فرید الدین ابو حامد محمد عطار نیشابوری شناخته شده به شیخ عطار نیشابوری یکی از بیِنشوران، پشمینه پوشان (صوفیان) و سرایندگان بزرگ ایرانی است"
  },
  {
    title: "به یاد استاد سخن فردوسی بزرگ",
    file: "2021 05 FERDOWSI.pdf",
    picture: "Faravahar-Gold.svg",
    description: "کلک (قلم) به دست گرفنت و نوشنت در باره ی استاد فردوسی بزرگ دلیری و توان بسیار می خواهد که من این توان را در خود نمی بینم. ولی از آنجا که روز ۲۵ اردیبهشت ماه که امسال برابر می شود با ۱۵ ماه مه ۲۰۲۱، به نام این بزرگوار و روز پاسداشت زبان پارسی برگزیده شده است"
  },
  {
    title: "به انگیزه ی فرارسیدن تیرگان",
    file: "2021 07 01 Tirgân.pdf",
    picture: "2021 07 01 Tirgân.jpeg",
    description: "در گاهشمار خورشیدی، گاهشماری که سالهاست، گاهشماِر کشورمان ایران است. روز دهم تیرماه، امسال برابر با یکم ژوییه جشن تیر یا تیرگان است"
  },
  {
    title: "مولوی",
    file: "2021 09 30 Molavi 10.pdf",
    picture: "2021 09 30 Molavi 10.jpeg",
    description: "اورمزدشید (پنجشنبه) هشتم مهرماه برابر با ۳۰ سپتامبر روِز بزرگداشت فرزانه ی ایرانی، مولوی می باشد. واالیی و دان ِش این ِسراینده ی پارسی گو، تا بدانجا می باشد که در سال ۲۰۰۷ از سوی سازمان فرهنگی ملل متحد، یونسکو سال جهان ِی موالنا برگزیده شد"
  },
  {
    title: "سعدی بزرگ",
    file: "2024 04 Saadi .pdf",
    picture: "2024 04 Saadi .jpeg",
    description: "این سروده ی سعدی بزرگ بر سرَدِر یکی از تاالرهای سازمان ملل متحد نوشته شده است. ما ایرانیان می باید این را به یاد داشته باشیم که در میان هزاران سراینده و نویسنده که در سراسر جهان به زبانهای گوناگون، سروده، سروده اند تنها و تنها این سروده سعدی بزرگ، شایستگی این را یافته که زینت بخش سر در تاالری در سازمان ملل متحد، گردد"
  },
  {
    title: "بانو دکتر مهرانگیز منوچهریان",
    file: "Manouchehrian.pdf",
    picture: "Manouchehrian.jpeg",
    description: "ای کاش در َنسک ُبزرگ زندگی، رسته ای (سطری) باشیم ماندنی، نه پانوشتی از یاد رفتنی! بی گفتگو بانو مهرانگیز منوچهریان هوده شناس (حقوق دان)، خنیاگر (موسیقی دان) و سیاستمداری ارزنده بوده است"
  },
  {
    title: "بانو توران شهریاری (بهرامی)",
    file: "بانو توران شهریاری.pdf",
    picture: "Faravahar-Gold.svg",
    description: "بانو توران شهریاری (بهرامی) یکی از زناِن سراینده ی ایرانی است که مایه ی سرفراز ِی همه، به ویژه ما بانواِن ایرانی تبار می باشد. او از هم میهناِن زرتشتی ما می باشد"
  },
  {
    title: "جشن تیرگان",
    file: "تیرگان .pdf",
    picture: "تیرگان .jpeg",
    description: "تاریخ ایران باستان ُپر است از جشن ها و آیین هایی که هر یک داستانی شنیدنی دارد. جشن تیرگان یکی از ِمهین ترین این جشن ها می باشد، که در تیرماه برگزار می شود"
  }
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
        <img :src="`/document_pictures/${document.picture}`" alt="document.title" class="document-picture" />
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
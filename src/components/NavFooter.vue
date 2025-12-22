<template>
  <div class="footer">
    <div class="footer-content">
      <p>
        Any questions about the content ? Contact the author at 
        <a href="mailto:jaleh.daftarian@gmail.com" rel="noopener noreferrer">
          jaleh.daftarian@gmail.com
        </a>
      </p>
      <p class="github-link">
        For the technical issues or features requests, please
        <a href="https://github.com/JeSuisUnCaillou/parsigooyan/issues/new" target="_blank" rel="noopener noreferrer">
          submit an issue on GitHub
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  background-color: $bg-color;
  color: $txt-color;
  padding: 20px;
  min-height: $footer-height;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  max-width: $content-width;
  margin: 0 auto;
  text-align: center;
}

a {
  color: $txt-color;
  text-decoration: underline;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
}
</style>

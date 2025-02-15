<template>
  <div class="footer">
    <div class="footer-content">
      Any questions ? Contact me at:<br /><br />
      <span class="adress">jaleh.daftarian@gmail.com</span>
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

.adress {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>

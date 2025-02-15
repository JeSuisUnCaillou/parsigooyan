<template>
  <router-link  class="back-button"
                :data-position="position"
                :to="{ name: 'Home' }">
    <img src="@/assets/left-arrow.svg" class="icon"/>
    Back
  </router-link>
</template>

<script>
export default {
  name: 'back-button',
  props: ['position']
}
</script>

<style lang="scss" scoped>
.back-button {
  display: flex;
  align-items: center;
  color: $bg-color;
  width: -moz-fit-content;
  width: fit-content;
  padding-right: 10px;

  &[data-position="top"] {
    margin-bottom: 20px;
  }

  &[data-position="bottom"] {
    margin-top: 20px;
  }
}

.icon {
  height: 20px;
  margin-right: 10px;
}
</style>

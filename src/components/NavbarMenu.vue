
<script setup>
import { ref } from 'vue'
import NavFooter from '@/components/NavFooter.vue'
import { useDefinitionsStore } from '@/stores/definitions.js'

const store = useDefinitionsStore()
const isOpen = ref(false)

function toggleMenu () {
  isOpen.value = !isOpen.value
}

function closeMenu () {
  isOpen.value = false
}
</script>


<template>
  <div class="menu-container">
    <div class="burger-button" @click="toggleMenu">
      <div  id="nav-icon1" class="burger"
            :data-open="isOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="side-menu" :open="isOpen">
      <router-link :to="{ name: 'Home' }"
                    class="brand menu-item">
        <img src="/logo_bouquetin_150x150.png" class="brand-icon" />
        <span class="brand-title title-font">
          Parsigooyan
        </span>
      </router-link>

      <router-link  v-for="letter in store.letters"
                    :key="letter.sign"
                    class="letter-link"
                    :to="{ name: 'Letter', params: { letter: letter.sign } }"
                    @click.native="closeMenu">
        {{letter.sign}} <span class="letter-count">({{letter.count}} definitions)</span>
      </router-link>

      <NavFooter />
    </div>

    <div class="cover" :open="isOpen" @click="closeMenu">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  position: relative;
}

.side-menu {
  padding-top: 20px;
  position: absolute;
  top: $navbar-height;
  left: 0;
  width: $side-menu-width;
  background-color: $bg-color;
  height: calc(100vh - #{$navbar-height});
  z-index: 1;
  overflow-y: auto;

  transition: transform 200ms ease-in-out;
  transform: translateX(-#{$side-menu-width});

  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 1rem;

  &[open=true] {
    transform: translateX(0);
  }
}

.burger {
  height: 25px;
  margin: 0 14px;
}

.burger-button {
  width: 55px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cover {
  position: absolute;
  top: $navbar-height;
  left: 0;
  width: 100vw;
  height: calc(100vh - #{$navbar-height});

  background-color: #00000080;
  display: none;
  cursor: pointer;

  &[open=true] {
    display: block;
  }
}

.menu-item {
  padding: 0 20px;
  margin-bottom: 20px;
  color: $txt-color;
}

.margin-top {
  margin-top: 20px;
}

.brand {
  display: flex;
  align-items: center;
}
.brand-icon {
  height: 50px;
  padding-right: 10px;
}
.brand-title {
 font-size: 1.5rem;
}

.letter-link {
  padding: 10px 0px 10px 30px;
  color: $txt-color;
  display: block;

  &:hover {
    background-color: #EEEEEF;
    color: $bg-color;
  }

  .letter-count {
    color: gray;
    margin-left: 10px;
  }
}

@media (min-width: 576px) {
  .brand {
    display: none;
  }
}

/* Animated Menu Icon */

#nav-icon1 {
  width: 20px;
  height: 15px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
}

#nav-icon1 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: $txt-color;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 6px;
}

#nav-icon1 span:nth-child(3) {
  top: 12px;
}

#nav-icon1[data-open=true] span:nth-child(1) {
  top: 6px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1[data-open=true] span:nth-child(2) {
  opacity: 0;
  left: -30px;
}

#nav-icon1[data-open=true] span:nth-child(3) {
  top: 6px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>

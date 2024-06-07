<script setup>
import NavBar from '../elements/NavBar.vue'
</script>

<template>
  <div class="home-container">
    <NavBar />
    <router-view />
  </div>
</template>

<style scoped>
@media screen and (max-width: 1000px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 600px) {
}
</style>

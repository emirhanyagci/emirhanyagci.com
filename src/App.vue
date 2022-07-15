<script setup lang="ts">
import appBackground from "./pages/appBackground.vue";
</script>

<template>
  <!--background of ui-->
  <div>
    <app-background></app-background>
  </div>
  <div class="flex h-[100vh] sm:flex-col sm:pb-10">
    <!-- <mobile-select></mobile-select> -->
    <select-section></select-section>
    <section-container class="w-[90%] sm:w-full" ></section-container>
  </div>
</template>

<style scoped>
</style>

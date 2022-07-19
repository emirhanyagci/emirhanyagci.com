<script setup lang="ts">
import appBackground from "./pages/appBackground.vue";
</script>

<template>
  <!--background of ui-->
  <div class="">
    <app-background></app-background>
  </div>
  <div class="flex min-h-[100vh] md:min-h-[120vh] md:flex-col md:pb-10" >
    <!-- <mobile-select></mobile-select> -->
    <select-section></select-section>
    <section-container class="w-[90%] md:w-full" ></section-container>
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
import {} from "vue";
</script>

<template>
  <div class="scrollSettings h-full w-full flex  flex-col justify-center py-14 px-10 sm:px-8 sm:justify-start sm:py-20">
    <span class="text-[#fca61f] text-6xl font-medium">Hello 👋, I Am</span>
    <span class="text-7xl font-bold mb-10 sm:text-5xl">Emirhan Yagci</span>
    <span class="w-[80%] mb-10 text-lg border-l-2 border-[#fca61f] pl-4 "
      >I’m curious to new technologies and a disciplined and passionate software
      devoloper who enjoys solving problems and strives with algorithms ,
      devoloping myself in the field of Front-end and web3 since 2019.</span
    >
    <div class="">
       <a href="https://github.com/emirhan-yagci?tab=repositories" target="_blank" class="bg-[#fca61f] px-5 py-3 rounded-xl font-bold cursor-pointer hover:bg-[#f19602]" style="box-shadow: 0 0 51px rgb(250 137 54 / 74%);">
      <span >
       See My Works
       </span>
      </a>
        </div>
  </div>
</template>

<style scoped>

.sectionBtn {
  background: linear-gradient(rgb(41, 38, 73) 0%, rgba(19, 17, 41, 0) 100%);
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  border-radius: 9px;
  border: 1px solid #2a2547;
  width: 50px;
  height: 50px;
  @apply w-[50px] h-[50px] transition-all duration-300 flex justify-center items-center cursor-pointer hover:bg-[#131129];
}

</style>

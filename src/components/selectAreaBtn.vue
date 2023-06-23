<script setup lang="ts">
import { defineProps, ref } from "vue";
const props: any = defineProps(["url", "text"]);
</script>

<template>
  <div class="flex items-center cursor-pointer md:flex-col md:space-y-2">
    <button :title="text" class="sectionBtn">
      <img :src="url" alt="" class="w-[17px] h-[17px]" />
    </button>
    <span class="hiddenText w-full text-center">{{ text }}</span>
  </div>
</template>

<style scoped>
.hiddenText {
  @apply inline-block opacity-50 max-w-0 whitespace-nowrap transition-all duration-300 overflow-hidden h-full border-[#fca61f] md:max-w-sm md:opacity-100  md:!border-l-0 md:!ml-0 md:border-t-2  md:pt-2 md:!pl-0;
}
.selectContainer:hover .hiddenText {
  @apply max-w-sm opacity-100 ml-3  border-l-2 border-[#fca61f] pl-2;
}
.sectionBtn {
  background: linear-gradient(rgb(41, 38, 73) 0%, rgba(19, 17, 41, 0) 100%);
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  border-radius: 9px;
  border: 1px solid #2a2547;

  @apply min-w-[50px] min-h-[50px] transition-all duration-300 flex justify-center items-center relative cursor-pointer hover:bg-[#131129];
}
</style>

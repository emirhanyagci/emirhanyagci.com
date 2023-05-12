<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <section
    class="bg-[#1D1933] selectContainer px-3 py-2 my-2 rounded-xl z-[10]"
  >
    <div
      class="justify-center space-y-3 flex flex-col items-center md:flex-row md:space-y-0 md:space-x-3 md:flex"
    >
      <a
        href="https://github.com/emirhan-yagci?tab=repositories"
        class="flex items-center w-full"
        target="_blank "
      >
        <div class="sectionBtn github">
          <img src="../assets/github.png" alt="" class="w-[20px]" />
        </div>
        <span class="hiddenText">GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/emirhan-yagci/"
        class="flex items-center"
        target="_blank"
      >
        <div class="sectionBtn linkedin">
          <img src="../assets/linkedin.png" alt="" class="w-[17px]" />
        </div>
        <span class="hiddenText">LinkedIn</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hiddenText {
  @apply inline-block opacity-50 max-w-0 whitespace-nowrap transition-all duration-300 overflow-hidden h-full;
}
.selectContainer:hover .hiddenText {
  @apply max-w-sm opacity-100 ml-3  border-l-[1px] border-[#fca61f] pl-2;
}
.sectionBtn {
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  border-radius: 9px;
  border: 1px solid #2a2547;
  @apply w-[50px] h-[50px] transition-all duration-300 flex justify-center items-center relative cursor-pointer hover:bg-[#131129];
}
.github {
  background: linear-gradient(#552792 0%, #35104e 100%);
}
.linkedin {
  background: linear-gradient(#0077b7 0%, #114f70 100%);

  @apply bg-[#0077B7];
}
</style>

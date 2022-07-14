<script setup lang="ts">
import {} from "vue";
import skillPercent from "./skillPercent.vue";

</script>

<template>
  <div class="h-full py-5 flex flex-col justify-between">
    <div class="flex space-x-5">
      <div class="group expert-box flex space-x-3">
        <figure class="mb-0 flex items-center">
          <span class="bg-[#2a2645] p-6 rounded-full">
            <img
              src="../assets/service-icon4.png"
              alt="service-icon"
              class="img-fluid min-w-[50px] max-w-[50px]"
            />
          </span>
        </figure>
        <div
          class="expert-box-content flex items-start flex-col justify-center"
        >
          <h1 class="font-semibold text-xl">Web Development</h1>

          <p class="text-[#a09cbb]">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </div>
      </div>

      <div class="expert-box flex space-x-3">
        <figure class="mb-0 flex items-center">
          <span class="bg-[#2a2645] p-6 rounded-full">
            <img
              src="../assets/service-icon3.png"
              alt="service-icon"
              class="img-fluid min-w-[50px] max-w-[50px]"
            />
          </span>
        </figure>
        <div
          class="expert-box-content flex items-start flex-col justify-center"
        >
          <h1 class="font-semibold text-xl">Web3 Development</h1>

          <p class="text-[#a09cbb]">
            I love Interaction with Smart Contract and I love made DApp using
            Web3.js and Ethers.js
          </p>
        </div>
      </div>
    </div>
    <!--skill percent-->
    <div class="flex">
      <div class="w-1/2 px-5 h-full space-y-10">
        <skill-percent name="Javascript" percent="80"></skill-percent>
        <skill-percent name="Typescript" percent="60"></skill-percent>
        <skill-percent name="Vue.js" percent="75"></skill-percent>
        <skill-percent name="HTML" percent="95"></skill-percent>
      </div>
      <div class="w-1/2 px-5 space-y-10">
        <skill-percent name="CSS" percent="90"></skill-percent>
        <skill-percent name="Tailwindcss" percent="80"></skill-percent>
        <skill-percent name="SCSS" percent="80"></skill-percent>
        <skill-percent name="Git" percent="80"></skill-percent>
      </div>
    </div>
    <div class="text-center mb-3">
      <a
        href="https://github.com/emirhan-yagci?tab=repositories"
        target="_blank"
      >
        <span
          class="
            bg-[#fca61f]
            px-5
            py-3
            rounded-xl
            font-bold
            cursor-pointer
            hover:bg-[#f19602]
          "
          style="box-shadow: 0 0 51px rgb(250 137 54 / 74%)"
          >See My Works</span
        >
      </a>
    </div>
  </div>
</template>

<style scoped>
.expert-box {
  @apply w-1/2 bg-[#211e39] border-[1px] border-transparent px-[18px] py-8 rounded-xl transition-all duration-300 ease-out hover:border-[#fca61f];
}
.expert-box:hover img {
  @apply transition-all duration-300;
}
.expert-box:hover img {
  @apply -translate-y-[8px];
}
figure img {
  background: #2a2645;
}
</style>

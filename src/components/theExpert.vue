<script setup lang="ts">
import {} from "vue";
import skillPercent from "./skillPercent.vue";

</script>

<template>
  <div class="scrollSettings h-full w-full px-5 py-5 flex flex-col justify-between">
    <div class="flex space-x-5 mb-5 md:flex-col md:space-x-0 ">
      <div class=" expert-box h-full w-1/2 flex space-x-3 lg:space-y-1 lg:flex-col lg:items-center md:flex-row mb-4 md:w-full 2sm:flex-col" >
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
          class="expert-box-content flex items-start flex-col justify-center lg:items-center lg:text-center"
        >
          <h1 class="font-semibold text-xl">Web Development</h1>

          <p class="text-[#a09cbb]">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </div>
      </div>

      <div class="expert-box h-full w-1/2 flex space-x-3 lg:space-y-1 lg:flex-col  lg:items-center md:w-full md:flex-row 2sm:flex-col" >
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
          class="expert-box-content flex items-start flex-col justify-center lg:items-center lg:text-center"
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
    <div class="flex mb-5  md:flex-col md:items-center md:space-y-9">
      <div class="w-1/2 px-5 h-full space-y-10 md:w-full">
        <skill-percent name="Javascript" percent="80"></skill-percent>
        <skill-percent name="Vue.js" percent="75"></skill-percent>
        <skill-percent name="Web3.js" percent="80"></skill-percent>
        <skill-percent name="HTML" percent="95"></skill-percent>
      </div>
      <div class="w-1/2 px-5 space-y-10 md:w-full">
        <skill-percent name="CSS" percent="90"></skill-percent>
        <skill-percent name="Tailwindcss" percent="80"></skill-percent>
        <skill-percent name="SCSS" percent="80"></skill-percent>
        <skill-percent name="Git" percent="80"></skill-percent>
      </div>
    </div>
    <div class="text-center mt-5 mb-7 2xl:mb-3">
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
  @apply bg-[#211e39] border-[1px] border-transparent px-[18px] py-8 rounded-xl transition-all duration-300 ease-out hover:border-[#fca61f] lg:py-4;
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

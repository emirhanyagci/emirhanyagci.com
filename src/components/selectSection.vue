<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import socialIcons from "./socialIcons.vue";
import selectAreaBtn from "./selectAreaBtn.vue";
const selectInfo: any = ref(null);
const router = useRouter();
function changeSection(section: string) {
  router.push(section);
}
</script>

<template>
  <div
    class="
      animate__backInLeft
      
      text-white
      flex
      flex-col
      justify-center
      items-center
      w-[250px]
      md:items-start 
      md:py-56
      sm:items-center
      sm:py-0
      sm:w-full sm:justify-center sm:my-7
      pl-10
      sm:pl-0
    "
  >
    <div
      class="
      selectContainer
        bg-[#1D1933]
        px-3
        py-3
        rounded-xl
        z-[10]
        sm:p-5 sm:flex
        2sm:flex-col
       
      "
    >
      <div class="space-y-4 2sm:flex sm:flex sm:space-y-0 sm:space-x-5">
      
                    <selectAreaBtn @click="changeSection('about')"  text="About me" url="user.png"></selectAreaBtn>

               <selectAreaBtn  @click="changeSection('skill')" text="Skills" url="cv.png"></selectAreaBtn>

          <selectAreaBtn @click="changeSection('blog')" text="Blog" url="writing.png"></selectAreaBtn>


        <selectAreaBtn @click="changeSection('contact')" text="Contact" url="at.png"></selectAreaBtn>
      </div>
    </div>
          <social-icons></social-icons>

  </div>
</template>

<style scoped>
.selectBtnWrap{
  
}

.animate__backInLeft {
  animation-duration: 1s;
}


</style>

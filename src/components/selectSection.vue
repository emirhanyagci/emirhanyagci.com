<script setup lang="ts">
import {ref} from "vue"
import {useRouter} from "vue-router"
const router = useRouter()
function changeSection(section:string){
    router.push(section)
}

</script>

<template>
    <div class="text-white flex justify-end items-center w-[100px] sm:w-full sm:justify-center sm:my-7" >
        <div class="bg-[#1D1933] px-3 py-10 rounded-xl z-[10] sm:p-5 sm:flex 2sm:flex-col" >
            <div class="space-y-4 2sm:flex sm:flex sm:space-y-0 sm:space-x-5">
                <div title="About" class="sectionBtn" @click="changeSection('about')"><img src="../assets/home.png" alt="" class="w-[18px]"></div>
                <div title="Skills" class="sectionBtn" @click="changeSection('expert')"><img src="../assets/cv.png" alt=""></div>
                <div title="Blog" class="sectionBtn" @click="changeSection('blog')"><img src="../assets/writing.png" alt=""></div>
                <div title="Contact" class="sectionBtn" @click="changeSection('contact')"><img src="../assets/at.png" alt="" class="w-[17px]"></div>
            </div>
            <div class="border-b-2 rounded-full border-red-500 my-3  sm:border-r-2 sm:my-0 sm:mx-3 sm:border-b-0 2sm:space-y-0 2sm:border-r-0 2sm:sm:border-b-2 2sm:my-3"></div>
            <div class=" space-y-4 justify-center sm:flex sm:space-y-0 sm:space-x-5">
                <a href="https://github.com/emirhan-yagci?tab=repositories" class="sectionBtn" target="_blank "><img src="../assets/github.png" alt="" class="w-[20px]"></a>
                <a href="https://www.linkedin.com/in/emirhan-yagci/" class="sectionBtn" target="_blank"><img src="../assets/linkedin.png" alt="" class="w-[17px]"></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sectionBtn{
    background: linear-gradient(rgb(41, 38, 73) 0%, rgba(19, 17, 41, 0) 100%);
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    border-radius: 9px;
    border: 1px solid #2A2547;
    width: 50px;
    height: 50px;
    @apply w-[50px] h-[50px] transition-all duration-300 flex justify-center items-center cursor-pointer hover:bg-[#131129]
}
</style>

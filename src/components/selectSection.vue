<script setup lang="ts">
import {} from "vue"
import {useRouter} from "vue-router"
const router = useRouter()
function changeSection(section:string){
    router.push(section)
}
</script>

<template>
    <div class="text-white flex justify-end items-center">
        <div class="bg-[#1D1933] space-y-5 px-3 py-10 rounded-xl z-[9999999]">
            <div class="sectionBtn" @click="changeSection('about')"><img src="../assets/home.png" alt="" class="w-[18px]"></div>
            <div class="sectionBtn" @click="changeSection('expert')"><img src="../assets/cv.png" alt=""></div>
            <div class="sectionBtn" @click="changeSection('blog')"><img src="../assets/writing.png" alt=""></div>
            <div class="sectionBtn" @click="changeSection('contact')"><img src="../assets/at.png" alt="" class="w-[17px]"></div>
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

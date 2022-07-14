<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
const props = defineProps(["name", "percent"]);
const virtualPercent = ref(0);
const plusPercent = ref(0);

const upPercent = setInterval(()=>{
    plusPercent.value++
    if(plusPercent.value >= props.percent){
        clearInterval(upPercent)
    }
},20)
setTimeout(() => {
  virtualPercent.value = props.percent;
}, 10);
</script>

<template>
  <div class="space-y-2">
    <div class="tracking-wider">{{ name }}</div>
    <div class="w-full h-2 bg-[#e3e3e3] rounded-full">
      <div
        :style="{ width: virtualPercent + '%' }"
        class="
          
          relative
          h-full
          transition-all
          duration-[2000ms]
          w-[0px]
          bg-red-500
          rounded-full
        "
      >
      <div class="absolute -right-2 -top-7 font-bold text-red-500">{{plusPercent}}%</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

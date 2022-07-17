<script setup lang="ts">
import {ref} from "vue";
import emailjs from "@emailjs/browser"
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

const messageCount = ref(0)

const u_Name = ref("");
const u_Mail = ref("");
const u_Subject = ref("");
const u_Message= ref("");


function sendMessage(){
event?.preventDefault()
if(localStorage.getItem("isSent") == "true"){
   createToast({ title: 'Unsuccessful', description: "You've already sent a message, wait a few minutes"},{
    type:'warning',
    position:'bottom-left',
    showIcon:true
  })
}else if(u_Name.value.trim().length > 0 && u_Mail.value.trim().length > 0 && u_Subject.value.trim().length > 0 && u_Message.value.trim().length > 0){
  u_Name.value = u_Mail.value = u_Subject.value = u_Message.value = "";
const props:any = {
  name:u_Name.value,
  gmail:u_Mail.value,
  subject:u_Subject.value,
  message:u_Message.value
}
emailjs.init('NhVa1hgVf55AJ0D7F');
emailjs.send('service_jof6d5b', 'template_kkkz4ue', props)
.then((res)=>{
  localStorage.setItem("isSent","true")
  setTimeout(()=>{
    localStorage.setItem("isSent","false")
  },180000)
  createToast({ title: 'Successful', description: "Your message succesfully sent"},{
    type:'success',
    position:'bottom-left',
    showIcon:true
  })
})
.catch(()=>{
   createToast({ title: 'Unsuccessful', description: "Your request failed"},{
    type:'warning',
    position:'bottom-left',
    showIcon:true
  })
})
}else{
  createToast({ title: 'warning', description: "There is unfilled areas"},{
    type:'warning',
    position:'bottom-left',
    showIcon:true
  })
}
}


function changeMaxLength(event:any){
   messageCount.value =  event.target.value.length
  
}
</script>

<template>
  <section class="scrollSettings h-full w-full space-y-8 pt-12 pb-10">
    <div class="space-y-2">
      <div class="text-[#fca61f] font-bold text-center text-3xl">
        Get in Touch
      </div>
      <div class="w-[75%] font-bold text-5xl text-center mx-auto">
        Any Questions? Feel Free to Contact
      </div>
      <div></div>
    </div>
    <form         @submit="sendMessage"
 action="" class="text-gray-300 w-full space-y-5">
      <div class="flex space-x-6 px-5 sm:flex-col sm:space-x-0 sm:space-y-5">
        <input class="w-1/2 rounded-full sm:w-full" type="text" placeholder="Name" minlength="1" maxlength="30" v-model="u_Name" required/>
        <input class="w-1/2 rounded-full sm:w-full" type="email" placeholder="Email" maxlength="50" v-model="u_Mail" required/>
      </div>
      <div class="px-5">
        <input class="rounded-full w-full" type="text" placeholder="Subject" minlength="2"  maxlength="150" v-model="u_Subject" required/>
      </div>
      <div class="px-5 relative">
        <textarea
          class="resize-none rounded-2xl w-full !pb-7"
          placeholder="Message"
          name=""
          id=""
          cols="30"
          rows="6"
          maxlength="1000"
          @input="changeMaxLength"
          v-model="u_Message"
          required
        ></textarea>
        <div class="absolute right-8 bottom-4 text-gray-500">{{messageCount}}/1000</div>
      </div>
      <div class="px-5 flex justify-center">
    
        <button
          class="
            submitBtn
            bg-[#fca61f]
            px-8
            py-3
            rounded-3xl
            font-bold
            cursor-pointer
            hover:bg-[#6f34fe]
            transition-all 
            duration-300
          "
        >
          Submit
        </button>
     
      </div>
    </form>
  </section>
</template>

<style scoped>
.sectionBtn {
  background: linear-gradient(rgb(41, 38, 73) 0%, rgba(19, 17, 41, 0) 100%);
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  border-radius: 9px;
  border: 1px solid #2a2547;

  @apply w-[50px] h-[50px] transition-all duration-300 flex justify-center items-center cursor-pointer hover:bg-[#131129];
}
input,       
textarea {
  @apply outline-none bg-[rgb(33,30,57)] px-8 py-4 outline-1 focus:outline-[rgb(111,52,254)];
}
.submitBtn{
box-shadow: 0 0 51px rgb(250 137 54 / 74%)
}
.submitBtn:hover{
  box-shadow: 0 0 51px rgb(111 52 254 / 74%) !important ;
  transform: translateY(-5px);
}
</style>

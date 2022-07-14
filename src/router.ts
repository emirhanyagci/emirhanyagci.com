import {createRouter,createWebHistory} from "vue-router"
import theAbout from "./components/theAbout.vue"
import theExpert from "./components/theExpert.vue"
import theBlog from "./components/theBlog.vue"
import theContact from "./components/theContact.vue"

const routes:any = [
    {path:"/",redirect:"/about"},
    {path:"/about",component:theAbout},
    {path:"/expert",component:theExpert},
    {path:"/blog",component:theBlog},
    {path:"/contact",component:theContact},


]
const router = createRouter({
    history:createWebHistory(),
    routes,
  
})
export default router;
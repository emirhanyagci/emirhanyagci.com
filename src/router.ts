import { createRouter, createWebHistory } from "vue-router"
import theAbout from "./components/theAbout.vue"
import theExpert from "./components/theExpert.vue"
import theBlog from "./components/theBlog.vue"

const routes: any = [
    { path: "/", redirect: "/about" },
    { path: "/about", component: theAbout },
    { path: "/skill", component: theExpert },
    { path: "/blog", component: theBlog },


]
const router = createRouter({
    history: createWebHistory(),
    routes,

})
export default router;
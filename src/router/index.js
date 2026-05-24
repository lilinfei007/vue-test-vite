import { createWebHistory,createRouter } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Books from '@/views/Books.vue';
const routes = [{
  path:'/',
  redirect:'/books'
},{
  path:'/hello',
  component:HelloWorld
},{
  path:'/books',
  component:Books
}];
const router = createRouter({
  history:createWebHistory(),
  routes
});
export default router;
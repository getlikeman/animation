import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Fade from "@/views/fade.vue";
import Slide from "@/views/Slide.vue";
import Scale from "@/views/Scale.vue";
import Rotate from "@/views/Rotate.vue";
import Shake from "@/views/Shake.vue";
import Saturate from "@/views/Saturate.vue";
import Tilt from "@/views/Tilt.vue";
import HeroAnimation from "@/views/HeroAnimation.vue";
import Blur from "@/views/Blur.vue";
import Animation from "@/views/Animation.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Fade'
  },
  {
    path: '/Fade',
    name: 'Fade',
    component: Fade
  },
  {
    path: '/Slide',
    name: 'Slide',
    component: Slide
  },
  {
    path: '/Scale',
    name: 'Scale',
    component:Scale
  },
  {
    path: '/Rotate',
    name: 'Rotate',
    component:Rotate
  },
  {
    path: '/Shake',
    name: 'Shake',
    component:Shake
  },
  {
    path: '/Saturate',
    name: 'Saturate',
    component:Saturate
  },
  {
    path: '/Tilt',
    name: 'Tilt',
    component:Tilt
  },
  {
    path: '/HeroAnimation',
    name: 'HeroAnimation',
    component:HeroAnimation
  },
  {
    path: '/Blur',
    name: 'Blur',
    component:Blur
  },{
    path: '/Animation',
    name: 'Animation',
    component:Animation
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

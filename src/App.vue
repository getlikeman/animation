<template>
  <ion-app >
    <ion-header>
      <ion-toolbar>
        <ion-title size="large">Кононец Никита Пк-7</ion-title>
        <ion-segment value="fade" :scrollable="true" >
          <ion-segment-button v-for="segment in segments" @click="router.replace('/'+segment)" :value="segment" :key="segment"><ion-label >{{segment}}</ion-label ></ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
      <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {IonApp, IonHeader, IonRouterOutlet, IonTitle, IonToolbar,IonLabel ,IonSegmentButton,IonSegment} from '@ionic/vue';
import router from "@/router";
let segments=['Fade','Slide','Scale','Rotate','Shake','Blur','Saturate','Tilt','HeroAnimation','animation']
</script>

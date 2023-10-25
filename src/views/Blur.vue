<script setup lang="ts">

import {IonApp, IonText,IonPage} from "@ionic/vue";
</script>

<template>
  <ion-page>
    <ion-text class="ion-text-center" style="margin:auto">Заставляет виджет появляться и исчезать постепенно</ion-text>
    <div class="target"></div>
  </ion-page>
</template>

<style scoped>

.target{
  animation: anim2 infinite 5s;
}
@keyframes anim2 {
  100%{
  filter: blur(100px);
  }
}
</style>

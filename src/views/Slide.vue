<script setup lang="ts">

import {IonApp, IonText,IonContent,IonPage} from "@ionic/vue";
</script>

<template>
  <ion-page>
      <ion-text class="ion-text-center" style="margin:auto;">Перемещает (меняет положение) виджет на экране</ion-text>
      <div class="target" ></div>
  </ion-page>
</template>

<style scoped>
.target{
  animation: anim2 infinite 5s;
  top: 60%;
  left: 45%;
}
@keyframes anim2 {
  100%{
    translate:50%;
  }
}
</style>

<script setup lang="ts">

import {IonApp, IonText,IonPage} from "@ionic/vue";
</script>

<template>
  <ion-page>
    <ion-text class="ion-text-center" style="margin:auto">Создает эффект преобразования (трехмерная перспектива) в виджете</ion-text>
    <div class="target"></div>
  </ion-page>
</template>

<style scoped>

.target{
  animation: anim infinite ;
  animation-duration:1s;

}
@keyframes anim {

  100%{
    transform: rotateX(200deg);
  }
}
</style>

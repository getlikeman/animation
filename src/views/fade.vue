<script setup lang="ts">

import {IonApp,IonText,IonPage} from "@ionic/vue";
</script>

<template>
  <ion-page>

    <ion-text class="ion-text-center" style="margin:auto">Заставляет виджет появляться и исчезать постепенно</ion-text>
    <div class="target"></div>
  </ion-page>

</template>

<style scoped>
.target{
  animation: anim infinite ;
  animation-duration:1s;

}
@keyframes anim {
  0%{
    opacity: 100%;
  }
  100%{
    opacity: 0;
  }
}
</style>

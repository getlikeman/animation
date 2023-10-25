<script setup lang="ts">

import {IonApp, IonText,IonPage} from "@ionic/vue";
</script>

<template>
  <ion-page>

    <ion-text class="ion-text-center" style="margin:auto">Вращает виджет по часовой стрелке или против часовой стрелки</ion-text>
    <div class="target"></div>
  </ion-page>
</template>

<style scoped>


.target{
  animation: anim infinite 5s;
}
@keyframes anim {
  100%{
    rotate: -180deg;
  }
}
</style>

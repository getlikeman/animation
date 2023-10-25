<script setup lang="ts">

import {IonApp, IonText,IonPage} from "@ionic/vue";
</script>

<template>
  <ion-page>
    <ion-text class="ion-text-center" style="margin:auto">Изменяет размер виджета</ion-text>
    <div class="target"></div>
  </ion-page>
</template>

<style scoped>

.target{
  animation: anim infinite 5s;
}
@keyframes anim {
  100%{
    scale: 2;
  }
}
</style>

<script setup lang="ts">

import {IonApp, IonText,IonPage} from "@ionic/vue";
</script>

<template>

  <ion-page>
    <ion-text class="ion-text-center" style="margin:auto">Создает эффект встряхивания виджета</ion-text>
    <div class="target"></div>
  </ion-page>
</template>

<style scoped>
.target{
  animation: anim 1s infinite;
}
@keyframes anim {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>

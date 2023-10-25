<script setup lang="ts">
import {IonContent,IonPage,IonText} from "@ionic/vue";
import video from '@/production_id_4618279 (1440p).mp4'
import poster from '@/photo1698237661.jpeg'
function play(event:Event){
  let video =event?.target
  video.classList.add('videoAnim')
  setTimeout(async ()=>{ await video.play()},5000)

}
function reset(){
  document?.body?.querySelector('video').classList.remove('videoAnim')
  document?.body?.querySelector('video').load()
}
</script>

<template>
  <ion-page>
    <ion-text class="ion-text-center ion-margin-vertical">нажмите на картинку чтобы увидеть анимацию </ion-text>
    <div>
      <video muted @click="play" :poster="poster">
        <source :src="video" >
      </video>

    </div>

    <ion-button @click="reset">перезапустить анимацию </ion-button>
  </ion-page>
</template>

<style scoped>
ion-text{
  margin: auto;
}
video{
  width: 50vw;
  height: 50vw;
  margin: auto;

}
.videoAnim{
  animation: anim 5s forwards;
}
div{
  width: 95vw;
  height: 50vh;
  margin: auto;
  display: flex;
  justify-content: center;
}
@keyframes anim {
  to{
    width: 90vw;
    height: 90vw;
  }
}
</style>

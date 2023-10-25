<script setup lang="ts">

import {IonApp,IonButton,IonPage} from "@ionic/vue";
import {ref} from "vue";
let state =ref(true)
let span=ref('Пауза')
function toggle() {
  if (state.value){
    state.value = !state.value
    span.value='Продолжить'
    document.body.querySelectorAll('.area').forEach(el=>el.classList.toggle('stop'))
  }else {
    state.value = !state.value
    span.value='Пауза'
    document.body.querySelectorAll('.area').forEach(el=>el.classList.toggle('stop'))
  }
}
</script>

<template>
  <ion-page>
    <div class="camera x">
      <div class="camera y">
        <div class="camera z">
          <div class="city">
            <div class="area" v-for="n in 100">
              <div class="building"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ion-button style="position: absolute; top: 50%; left: 40%" @click="toggle">{{span}}</ion-button>
  </ion-page>
</template>

<style scoped>
.stop{
  -webkit-animation-play-state: paused !important;
  -moz-animation-play-state: paused !important;
  -o-animation-play-state: paused !important;
  animation-play-state: paused !important;
}
.camera {
  position: absolute;
  width: 100%;
  height: 100vh;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.camera.z {
  transform: rotateZ(-45deg);
}
.camera.y {
  transform: rotateX(45deg);
}

.building {
  position: relative;
  width: 100%;
  height: 100%;
  background: #444;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.building::before {
  content: "";
  position: absolute;
  height: 100%;
  background: #222;
  transform-origin: 100% 50%;
  transform: translateX(-100%) rotateY(-90deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.building::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #333;
  transform-origin: 50% 0;
  transform: translateY(100%) rotateX(-90deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.city {
  width: 100%;
  height: 100vh;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.area {
  position: absolute;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-animation: slide 40000ms linear infinite;
  animation: slide 40000ms linear infinite;
}
.area:nth-child(1) {
  top: 26%;
  left: 14%;
  width: 122px;
  height: 117px;
  -webkit-animation-delay: -10454ms;
  animation-delay: -10454ms;
}
.area:nth-child(1) .building {
  transform: translate(-50%, -50%) translateZ(166px);
}
.area:nth-child(1) .building::before {
  width: 166px;
}
.area:nth-child(1) .building::after {
  height: 166px;
}
.area:nth-child(2) {
  top: 65%;
  left: 54%;
  width: 100px;
  height: 133px;
  -webkit-animation-delay: -33943ms;
  animation-delay: -33943ms;
}
.area:nth-child(2) .building {
  transform: translate(-50%, -50%) translateZ(49px);
}
.area:nth-child(2) .building::before {
  width: 49px;
}
.area:nth-child(2) .building::after {
  height: 49px;
}
.area:nth-child(3) {
  top: 24%;
  left: 67%;
  width: 66px;
  height: 113px;
  -webkit-animation-delay: -16816ms;
  animation-delay: -16816ms;
}
.area:nth-child(3) .building {
  transform: translate(-50%, -50%) translateZ(374px);
}
.area:nth-child(3) .building::before {
  width: 374px;
}
.area:nth-child(3) .building::after {
  height: 374px;
}
.area:nth-child(4) {
  top: 9%;
  left: 81%;
  width: 96px;
  height: 116px;
  -webkit-animation-delay: -38361ms;
  animation-delay: -38361ms;
}
.area:nth-child(4) .building {
  transform: translate(-50%, -50%) translateZ(68px);
}
.area:nth-child(4) .building::before {
  width: 68px;
}
.area:nth-child(4) .building::after {
  height: 68px;
}
.area:nth-child(5) {
  top: 85%;
  left: 72%;
  width: 53px;
  height: 55px;
  -webkit-animation-delay: -7987ms;
  animation-delay: -7987ms;
}
.area:nth-child(5) .building {
  transform: translate(-50%, -50%) translateZ(103px);
}
.area:nth-child(5) .building::before {
  width: 103px;
}
.area:nth-child(5) .building::after {
  height: 103px;
}
.area:nth-child(6) {
  top: 60%;
  left: 58%;
  width: 118px;
  height: 124px;
  -webkit-animation-delay: -39724ms;
  animation-delay: -39724ms;
}
.area:nth-child(6) .building {
  transform: translate(-50%, -50%) translateZ(216px);
}
.area:nth-child(6) .building::before {
  width: 216px;
}
.area:nth-child(6) .building::after {
  height: 216px;
}
.area:nth-child(7) {
  top: 40%;
  left: 83%;
  width: 85px;
  height: 136px;
  -webkit-animation-delay: -6790ms;
  animation-delay: -6790ms;
}
.area:nth-child(7) .building {
  transform: translate(-50%, -50%) translateZ(25px);
}
.area:nth-child(7) .building::before {
  width: 25px;
}
.area:nth-child(7) .building::after {
  height: 25px;
}
.area:nth-child(8) {
  top: 39%;
  left: 40%;
  width: 50px;
  height: 101px;
  -webkit-animation-delay: -16869ms;
  animation-delay: -16869ms;
}
.area:nth-child(8) .building {
  transform: translate(-50%, -50%) translateZ(167px);
}
.area:nth-child(8) .building::before {
  width: 167px;
}
.area:nth-child(8) .building::after {
  height: 167px;
}
.area:nth-child(9) {
  top: 17%;
  left: 98%;
  width: 168px;
  height: 163px;
  -webkit-animation-delay: -10583ms;
  animation-delay: -10583ms;
}
.area:nth-child(9) .building {
  transform: translate(-50%, -50%) translateZ(245px);
}
.area:nth-child(9) .building::before {
  width: 245px;
}
.area:nth-child(9) .building::after {
  height: 245px;
}
.area:nth-child(10) {
  top: 45%;
  left: 79%;
  width: 91px;
  height: 55px;
  -webkit-animation-delay: -2130ms;
  animation-delay: -2130ms;
}
.area:nth-child(10) .building {
  transform: translate(-50%, -50%) translateZ(167px);
}
.area:nth-child(10) .building::before {
  width: 167px;
}
.area:nth-child(10) .building::after {
  height: 167px;
}
.area:nth-child(11) {
  top: 62%;
  left: 89%;
  width: 81px;
  height: 97px;
  -webkit-animation-delay: -32641ms;
  animation-delay: -32641ms;
}
.area:nth-child(11) .building {
  transform: translate(-50%, -50%) translateZ(179px);
}
.area:nth-child(11) .building::before {
  width: 179px;
}
.area:nth-child(11) .building::after {
  height: 179px;
}
.area:nth-child(12) {
  top: 66%;
  left: 6%;
  width: 171px;
  height: 171px;
  -webkit-animation-delay: -13614ms;
  animation-delay: -13614ms;
}
.area:nth-child(12) .building {
  transform: translate(-50%, -50%) translateZ(107px);
}
.area:nth-child(12) .building::before {
  width: 107px;
}
.area:nth-child(12) .building::after {
  height: 107px;
}
.area:nth-child(13) {
  top: 72%;
  left: 83%;
  width: 180px;
  height: 63px;
  -webkit-animation-delay: -3475ms;
  animation-delay: -3475ms;
}
.area:nth-child(13) .building {
  transform: translate(-50%, -50%) translateZ(185px);
}
.area:nth-child(13) .building::before {
  width: 185px;
}
.area:nth-child(13) .building::after {
  height: 185px;
}
.area:nth-child(14) {
  top: 27%;
  left: 4%;
  width: 144px;
  height: 90px;
  -webkit-animation-delay: -20086ms;
  animation-delay: -20086ms;
}
.area:nth-child(14) .building {
  transform: translate(-50%, -50%) translateZ(228px);
}
.area:nth-child(14) .building::before {
  width: 228px;
}
.area:nth-child(14) .building::after {
  height: 228px;
}
.area:nth-child(15) {
  top: 35%;
  left: 19%;
  width: 90px;
  height: 42px;
  -webkit-animation-delay: -12505ms;
  animation-delay: -12505ms;
}
.area:nth-child(15) .building {
  transform: translate(-50%, -50%) translateZ(271px);
}
.area:nth-child(15) .building::before {
  width: 271px;
}
.area:nth-child(15) .building::after {
  height: 271px;
}
.area:nth-child(16) {
  top: 66%;
  left: -19%;
  width: 102px;
  height: 40px;
  -webkit-animation-delay: -22203ms;
  animation-delay: -22203ms;
}
.area:nth-child(16) .building {
  transform: translate(-50%, -50%) translateZ(384px);
}
.area:nth-child(16) .building::before {
  width: 384px;
}
.area:nth-child(16) .building::after {
  height: 384px;
}
.area:nth-child(17) {
  top: 37%;
  left: 50%;
  width: 136px;
  height: 96px;
  -webkit-animation-delay: -24219ms;
  animation-delay: -24219ms;
}
.area:nth-child(17) .building {
  transform: translate(-50%, -50%) translateZ(137px);
}
.area:nth-child(17) .building::before {
  width: 137px;
}
.area:nth-child(17) .building::after {
  height: 137px;
}
.area:nth-child(18) {
  top: 40%;
  left: 29%;
  width: 110px;
  height: 84px;
  -webkit-animation-delay: -27004ms;
  animation-delay: -27004ms;
}
.area:nth-child(18) .building {
  transform: translate(-50%, -50%) translateZ(407px);
}
.area:nth-child(18) .building::before {
  width: 407px;
}
.area:nth-child(18) .building::after {
  height: 407px;
}
.area:nth-child(19) {
  top: 49%;
  left: 47%;
  width: 107px;
  height: 63px;
  -webkit-animation-delay: -28279ms;
  animation-delay: -28279ms;
}
.area:nth-child(19) .building {
  transform: translate(-50%, -50%) translateZ(266px);
}
.area:nth-child(19) .building::before {
  width: 266px;
}
.area:nth-child(19) .building::after {
  height: 266px;
}
.area:nth-child(20) {
  top: 51%;
  left: 76%;
  width: 132px;
  height: 64px;
  -webkit-animation-delay: -20324ms;
  animation-delay: -20324ms;
}
.area:nth-child(20) .building {
  transform: translate(-50%, -50%) translateZ(336px);
}
.area:nth-child(20) .building::before {
  width: 336px;
}
.area:nth-child(20) .building::after {
  height: 336px;
}
.area:nth-child(21) {
  top: 91%;
  left: 82%;
  width: 127px;
  height: 105px;
  -webkit-animation-delay: -28920ms;
  animation-delay: -28920ms;
}
.area:nth-child(21) .building {
  transform: translate(-50%, -50%) translateZ(366px);
}
.area:nth-child(21) .building::before {
  width: 366px;
}
.area:nth-child(21) .building::after {
  height: 366px;
}
.area:nth-child(22) {
  top: 53%;
  left: 119%;
  width: 128px;
  height: 35px;
  -webkit-animation-delay: -17628ms;
  animation-delay: -17628ms;
}
.area:nth-child(22) .building {
  transform: translate(-50%, -50%) translateZ(267px);
}
.area:nth-child(22) .building::before {
  width: 267px;
}
.area:nth-child(22) .building::after {
  height: 267px;
}
.area:nth-child(23) {
  top: 56%;
  left: 2%;
  width: 136px;
  height: 141px;
  -webkit-animation-delay: -18203ms;
  animation-delay: -18203ms;
}
.area:nth-child(23) .building {
  transform: translate(-50%, -50%) translateZ(414px);
}
.area:nth-child(23) .building::before {
  width: 414px;
}
.area:nth-child(23) .building::after {
  height: 414px;
}
.area:nth-child(24) {
  top: 62%;
  left: 44%;
  width: 152px;
  height: 136px;
  -webkit-animation-delay: -12270ms;
  animation-delay: -12270ms;
}
.area:nth-child(24) .building {
  transform: translate(-50%, -50%) translateZ(289px);
}
.area:nth-child(24) .building::before {
  width: 289px;
}
.area:nth-child(24) .building::after {
  height: 289px;
}
.area:nth-child(25) {
  top: 7%;
  left: 60%;
  width: 110px;
  height: 36px;
  -webkit-animation-delay: -3309ms;
  animation-delay: -3309ms;
}
.area:nth-child(25) .building {
  transform: translate(-50%, -50%) translateZ(386px);
}
.area:nth-child(25) .building::before {
  width: 386px;
}
.area:nth-child(25) .building::after {
  height: 386px;
}
.area:nth-child(26) {
  top: 27%;
  left: 38%;
  width: 97px;
  height: 59px;
  -webkit-animation-delay: -13048ms;
  animation-delay: -13048ms;
}
.area:nth-child(26) .building {
  transform: translate(-50%, -50%) translateZ(406px);
}
.area:nth-child(26) .building::before {
  width: 406px;
}
.area:nth-child(26) .building::after {
  height: 406px;
}
.area:nth-child(27) {
  top: 64%;
  left: 24%;
  width: 108px;
  height: 111px;
  -webkit-animation-delay: -23060ms;
  animation-delay: -23060ms;
}
.area:nth-child(27) .building {
  transform: translate(-50%, -50%) translateZ(190px);
}
.area:nth-child(27) .building::before {
  width: 190px;
}
.area:nth-child(27) .building::after {
  height: 190px;
}
.area:nth-child(28) {
  top: 60%;
  left: 50%;
  width: 108px;
  height: 47px;
  -webkit-animation-delay: -8410ms;
  animation-delay: -8410ms;
}
.area:nth-child(28) .building {
  transform: translate(-50%, -50%) translateZ(363px);
}
.area:nth-child(28) .building::before {
  width: 363px;
}
.area:nth-child(28) .building::after {
  height: 363px;
}
.area:nth-child(29) {
  top: 7%;
  left: 42%;
  width: 73px;
  height: 104px;
  -webkit-animation-delay: -27327ms;
  animation-delay: -27327ms;
}
.area:nth-child(29) .building {
  transform: translate(-50%, -50%) translateZ(296px);
}
.area:nth-child(29) .building::before {
  width: 296px;
}
.area:nth-child(29) .building::after {
  height: 296px;
}
.area:nth-child(30) {
  top: 6%;
  left: -4%;
  width: 43px;
  height: 60px;
  -webkit-animation-delay: -35391ms;
  animation-delay: -35391ms;
}
.area:nth-child(30) .building {
  transform: translate(-50%, -50%) translateZ(175px);
}
.area:nth-child(30) .building::before {
  width: 175px;
}
.area:nth-child(30) .building::after {
  height: 175px;
}
.area:nth-child(31) {
  top: 4%;
  left: 41%;
  width: 170px;
  height: 85px;
  -webkit-animation-delay: -4875ms;
  animation-delay: -4875ms;
}
.area:nth-child(31) .building {
  transform: translate(-50%, -50%) translateZ(214px);
}
.area:nth-child(31) .building::before {
  width: 214px;
}
.area:nth-child(31) .building::after {
  height: 214px;
}
.area:nth-child(32) {
  top: 35%;
  left: -8%;
  width: 81px;
  height: 74px;
  -webkit-animation-delay: -28127ms;
  animation-delay: -28127ms;
}
.area:nth-child(32) .building {
  transform: translate(-50%, -50%) translateZ(108px);
}
.area:nth-child(32) .building::before {
  width: 108px;
}
.area:nth-child(32) .building::after {
  height: 108px;
}
.area:nth-child(33) {
  top: 91%;
  left: 91%;
  width: 174px;
  height: 65px;
  -webkit-animation-delay: -11756ms;
  animation-delay: -11756ms;
}
.area:nth-child(33) .building {
  transform: translate(-50%, -50%) translateZ(27px);
}
.area:nth-child(33) .building::before {
  width: 27px;
}
.area:nth-child(33) .building::after {
  height: 27px;
}
.area:nth-child(34) {
  top: 30%;
  left: 96%;
  width: 58px;
  height: 152px;
  -webkit-animation-delay: -14750ms;
  animation-delay: -14750ms;
}
.area:nth-child(34) .building {
  transform: translate(-50%, -50%) translateZ(286px);
}
.area:nth-child(34) .building::before {
  width: 286px;
}
.area:nth-child(34) .building::after {
  height: 286px;
}
.area:nth-child(35) {
  top: 2%;
  left: 82%;
  width: 110px;
  height: 179px;
  -webkit-animation-delay: -3600ms;
  animation-delay: -3600ms;
}
.area:nth-child(35) .building {
  transform: translate(-50%, -50%) translateZ(38px);
}
.area:nth-child(35) .building::before {
  width: 38px;
}
.area:nth-child(35) .building::after {
  height: 38px;
}
.area:nth-child(36) {
  top: 31%;
  left: 50%;
  width: 55px;
  height: 39px;
  -webkit-animation-delay: -1714ms;
  animation-delay: -1714ms;
}
.area:nth-child(36) .building {
  transform: translate(-50%, -50%) translateZ(184px);
}
.area:nth-child(36) .building::before {
  width: 184px;
}
.area:nth-child(36) .building::after {
  height: 184px;
}
.area:nth-child(37) {
  top: 21%;
  left: 48%;
  width: 56px;
  height: 179px;
  -webkit-animation-delay: -15104ms;
  animation-delay: -15104ms;
}
.area:nth-child(37) .building {
  transform: translate(-50%, -50%) translateZ(273px);
}
.area:nth-child(37) .building::before {
  width: 273px;
}
.area:nth-child(37) .building::after {
  height: 273px;
}
.area:nth-child(38) {
  top: 95%;
  left: 82%;
  width: 127px;
  height: 91px;
  -webkit-animation-delay: -36806ms;
  animation-delay: -36806ms;
}
.area:nth-child(38) .building {
  transform: translate(-50%, -50%) translateZ(64px);
}
.area:nth-child(38) .building::before {
  width: 64px;
}
.area:nth-child(38) .building::after {
  height: 64px;
}
.area:nth-child(39) {
  top: 14%;
  left: 118%;
  width: 151px;
  height: 68px;
  -webkit-animation-delay: -16456ms;
  animation-delay: -16456ms;
}
.area:nth-child(39) .building {
  transform: translate(-50%, -50%) translateZ(199px);
}
.area:nth-child(39) .building::before {
  width: 199px;
}
.area:nth-child(39) .building::after {
  height: 199px;
}
.area:nth-child(40) {
  top: 96%;
  left: 31%;
  width: 138px;
  height: 100px;
  -webkit-animation-delay: -24206ms;
  animation-delay: -24206ms;
}
.area:nth-child(40) .building {
  transform: translate(-50%, -50%) translateZ(109px);
}
.area:nth-child(40) .building::before {
  width: 109px;
}
.area:nth-child(40) .building::after {
  height: 109px;
}
.area:nth-child(41) {
  top: 92%;
  left: 7%;
  width: 170px;
  height: 77px;
  -webkit-animation-delay: -30998ms;
  animation-delay: -30998ms;
}
.area:nth-child(41) .building {
  transform: translate(-50%, -50%) translateZ(367px);
}
.area:nth-child(41) .building::before {
  width: 367px;
}
.area:nth-child(41) .building::after {
  height: 367px;
}
.area:nth-child(42) {
  top: 77%;
  left: 41%;
  width: 106px;
  height: 116px;
  -webkit-animation-delay: -3048ms;
  animation-delay: -3048ms;
}
.area:nth-child(42) .building {
  transform: translate(-50%, -50%) translateZ(292px);
}
.area:nth-child(42) .building::before {
  width: 292px;
}
.area:nth-child(42) .building::after {
  height: 292px;
}
.area:nth-child(43) {
  top: 70%;
  left: -6%;
  width: 157px;
  height: 32px;
  -webkit-animation-delay: -22052ms;
  animation-delay: -22052ms;
}
.area:nth-child(43) .building {
  transform: translate(-50%, -50%) translateZ(318px);
}
.area:nth-child(43) .building::before {
  width: 318px;
}
.area:nth-child(43) .building::after {
  height: 318px;
}
.area:nth-child(44) {
  top: 23%;
  left: 114%;
  width: 51px;
  height: 54px;
  -webkit-animation-delay: -5543ms;
  animation-delay: -5543ms;
}
.area:nth-child(44) .building {
  transform: translate(-50%, -50%) translateZ(205px);
}
.area:nth-child(44) .building::before {
  width: 205px;
}
.area:nth-child(44) .building::after {
  height: 205px;
}
.area:nth-child(45) {
  top: 21%;
  left: 71%;
  width: 46px;
  height: 37px;
  -webkit-animation-delay: -28510ms;
  animation-delay: -28510ms;
}
.area:nth-child(45) .building {
  transform: translate(-50%, -50%) translateZ(363px);
}
.area:nth-child(45) .building::before {
  width: 363px;
}
.area:nth-child(45) .building::after {
  height: 363px;
}
.area:nth-child(46) {
  top: 69%;
  left: 90%;
  width: 127px;
  height: 50px;
  -webkit-animation-delay: -2757ms;
  animation-delay: -2757ms;
}
.area:nth-child(46) .building {
  transform: translate(-50%, -50%) translateZ(94px);
}
.area:nth-child(46) .building::before {
  width: 94px;
}
.area:nth-child(46) .building::after {
  height: 94px;
}
.area:nth-child(47) {
  top: 58%;
  left: 79%;
  width: 148px;
  height: 174px;
  -webkit-animation-delay: -7556ms;
  animation-delay: -7556ms;
}
.area:nth-child(47) .building {
  transform: translate(-50%, -50%) translateZ(93px);
}
.area:nth-child(47) .building::before {
  width: 93px;
}
.area:nth-child(47) .building::after {
  height: 93px;
}
.area:nth-child(48) {
  top: 40%;
  left: 40%;
  width: 175px;
  height: 58px;
  -webkit-animation-delay: -10475ms;
  animation-delay: -10475ms;
}
.area:nth-child(48) .building {
  transform: translate(-50%, -50%) translateZ(251px);
}
.area:nth-child(48) .building::before {
  width: 251px;
}
.area:nth-child(48) .building::after {
  height: 251px;
}
.area:nth-child(49) {
  top: 89%;
  left: 71%;
  width: 179px;
  height: 53px;
  -webkit-animation-delay: -33653ms;
  animation-delay: -33653ms;
}
.area:nth-child(49) .building {
  transform: translate(-50%, -50%) translateZ(32px);
}
.area:nth-child(49) .building::before {
  width: 32px;
}
.area:nth-child(49) .building::after {
  height: 32px;
}
.area:nth-child(50) {
  top: 6%;
  left: 51%;
  width: 130px;
  height: 32px;
  -webkit-animation-delay: -4454ms;
  animation-delay: -4454ms;
}
.area:nth-child(50) .building {
  transform: translate(-50%, -50%) translateZ(381px);
}
.area:nth-child(50) .building::before {
  width: 381px;
}
.area:nth-child(50) .building::after {
  height: 381px;
}
.area:nth-child(51) {
  top: 91%;
  left: 102%;
  width: 179px;
  height: 38px;
  -webkit-animation-delay: -12461ms;
  animation-delay: -12461ms;
}
.area:nth-child(51) .building {
  transform: translate(-50%, -50%) translateZ(327px);
}
.area:nth-child(51) .building::before {
  width: 327px;
}
.area:nth-child(51) .building::after {
  height: 327px;
}
.area:nth-child(52) {
  top: 82%;
  left: 20%;
  width: 59px;
  height: 64px;
  -webkit-animation-delay: -38326ms;
  animation-delay: -38326ms;
}
.area:nth-child(52) .building {
  transform: translate(-50%, -50%) translateZ(226px);
}
.area:nth-child(52) .building::before {
  width: 226px;
}
.area:nth-child(52) .building::after {
  height: 226px;
}
.area:nth-child(53) {
  top: 93%;
  left: -14%;
  width: 47px;
  height: 159px;
  -webkit-animation-delay: -19876ms;
  animation-delay: -19876ms;
}
.area:nth-child(53) .building {
  transform: translate(-50%, -50%) translateZ(106px);
}
.area:nth-child(53) .building::before {
  width: 106px;
}
.area:nth-child(53) .building::after {
  height: 106px;
}
.area:nth-child(54) {
  top: 2%;
  left: 59%;
  width: 67px;
  height: 113px;
  -webkit-animation-delay: -1260ms;
  animation-delay: -1260ms;
}
.area:nth-child(54) .building {
  transform: translate(-50%, -50%) translateZ(416px);
}
.area:nth-child(54) .building::before {
  width: 416px;
}
.area:nth-child(54) .building::after {
  height: 416px;
}
.area:nth-child(55) {
  top: 98%;
  left: 5%;
  width: 168px;
  height: 51px;
  -webkit-animation-delay: -27627ms;
  animation-delay: -27627ms;
}
.area:nth-child(55) .building {
  transform: translate(-50%, -50%) translateZ(409px);
}
.area:nth-child(55) .building::before {
  width: 409px;
}
.area:nth-child(55) .building::after {
  height: 409px;
}
.area:nth-child(56) {
  top: 31%;
  left: -18%;
  width: 176px;
  height: 170px;
  -webkit-animation-delay: -39602ms;
  animation-delay: -39602ms;
}
.area:nth-child(56) .building {
  transform: translate(-50%, -50%) translateZ(380px);
}
.area:nth-child(56) .building::before {
  width: 380px;
}
.area:nth-child(56) .building::after {
  height: 380px;
}
.area:nth-child(57) {
  top: 50%;
  left: 18%;
  width: 84px;
  height: 174px;
  -webkit-animation-delay: -25243ms;
  animation-delay: -25243ms;
}
.area:nth-child(57) .building {
  transform: translate(-50%, -50%) translateZ(22px);
}
.area:nth-child(57) .building::before {
  width: 22px;
}
.area:nth-child(57) .building::after {
  height: 22px;
}
.area:nth-child(58) {
  top: 95%;
  left: 85%;
  width: 37px;
  height: 121px;
  -webkit-animation-delay: -18608ms;
  animation-delay: -18608ms;
}
.area:nth-child(58) .building {
  transform: translate(-50%, -50%) translateZ(273px);
}
.area:nth-child(58) .building::before {
  width: 273px;
}
.area:nth-child(58) .building::after {
  height: 273px;
}
.area:nth-child(59) {
  top: 51%;
  left: -17%;
  width: 81px;
  height: 84px;
  -webkit-animation-delay: -35681ms;
  animation-delay: -35681ms;
}
.area:nth-child(59) .building {
  transform: translate(-50%, -50%) translateZ(251px);
}
.area:nth-child(59) .building::before {
  width: 251px;
}
.area:nth-child(59) .building::after {
  height: 251px;
}
.area:nth-child(60) {
  top: 13%;
  left: 81%;
  width: 49px;
  height: 164px;
  -webkit-animation-delay: -17270ms;
  animation-delay: -17270ms;
}
.area:nth-child(60) .building {
  transform: translate(-50%, -50%) translateZ(60px);
}
.area:nth-child(60) .building::before {
  width: 60px;
}
.area:nth-child(60) .building::after {
  height: 60px;
}
.area:nth-child(61) {
  top: 23%;
  left: 5%;
  width: 74px;
  height: 84px;
  -webkit-animation-delay: -7426ms;
  animation-delay: -7426ms;
}
.area:nth-child(61) .building {
  transform: translate(-50%, -50%) translateZ(240px);
}
.area:nth-child(61) .building::before {
  width: 240px;
}
.area:nth-child(61) .building::after {
  height: 240px;
}
.area:nth-child(62) {
  top: 85%;
  left: 107%;
  width: 119px;
  height: 159px;
  -webkit-animation-delay: -35235ms;
  animation-delay: -35235ms;
}
.area:nth-child(62) .building {
  transform: translate(-50%, -50%) translateZ(139px);
}
.area:nth-child(62) .building::before {
  width: 139px;
}
.area:nth-child(62) .building::after {
  height: 139px;
}
.area:nth-child(63) {
  top: 72%;
  left: 39%;
  width: 76px;
  height: 32px;
  -webkit-animation-delay: -3620ms;
  animation-delay: -3620ms;
}
.area:nth-child(63) .building {
  transform: translate(-50%, -50%) translateZ(161px);
}
.area:nth-child(63) .building::before {
  width: 161px;
}
.area:nth-child(63) .building::after {
  height: 161px;
}
.area:nth-child(64) {
  top: 97%;
  left: -15%;
  width: 76px;
  height: 103px;
  -webkit-animation-delay: -439ms;
  animation-delay: -439ms;
}
.area:nth-child(64) .building {
  transform: translate(-50%, -50%) translateZ(135px);
}
.area:nth-child(64) .building::before {
  width: 135px;
}
.area:nth-child(64) .building::after {
  height: 135px;
}
.area:nth-child(65) {
  top: 37%;
  left: 14%;
  width: 118px;
  height: 135px;
  -webkit-animation-delay: -5532ms;
  animation-delay: -5532ms;
}
.area:nth-child(65) .building {
  transform: translate(-50%, -50%) translateZ(148px);
}
.area:nth-child(65) .building::before {
  width: 148px;
}
.area:nth-child(65) .building::after {
  height: 148px;
}
.area:nth-child(66) {
  top: 40%;
  left: -13%;
  width: 40px;
  height: 175px;
  -webkit-animation-delay: -33008ms;
  animation-delay: -33008ms;
}
.area:nth-child(66) .building {
  transform: translate(-50%, -50%) translateZ(225px);
}
.area:nth-child(66) .building::before {
  width: 225px;
}
.area:nth-child(66) .building::after {
  height: 225px;
}
.area:nth-child(67) {
  top: 62%;
  left: 65%;
  width: 68px;
  height: 48px;
  -webkit-animation-delay: -2908ms;
  animation-delay: -2908ms;
}
.area:nth-child(67) .building {
  transform: translate(-50%, -50%) translateZ(123px);
}
.area:nth-child(67) .building::before {
  width: 123px;
}
.area:nth-child(67) .building::after {
  height: 123px;
}
.area:nth-child(68) {
  top: 67%;
  left: -4%;
  width: 172px;
  height: 124px;
  -webkit-animation-delay: -26980ms;
  animation-delay: -26980ms;
}
.area:nth-child(68) .building {
  transform: translate(-50%, -50%) translateZ(33px);
}
.area:nth-child(68) .building::before {
  width: 33px;
}
.area:nth-child(68) .building::after {
  height: 33px;
}
.area:nth-child(69) {
  top: 93%;
  left: 30%;
  width: 137px;
  height: 134px;
  -webkit-animation-delay: -18584ms;
  animation-delay: -18584ms;
}
.area:nth-child(69) .building {
  transform: translate(-50%, -50%) translateZ(118px);
}
.area:nth-child(69) .building::before {
  width: 118px;
}
.area:nth-child(69) .building::after {
  height: 118px;
}
.area:nth-child(70) {
  top: 77%;
  left: 59%;
  width: 120px;
  height: 144px;
  -webkit-animation-delay: -11128ms;
  animation-delay: -11128ms;
}
.area:nth-child(70) .building {
  transform: translate(-50%, -50%) translateZ(140px);
}
.area:nth-child(70) .building::before {
  width: 140px;
}
.area:nth-child(70) .building::after {
  height: 140px;
}
.area:nth-child(71) {
  top: 85%;
  left: 114%;
  width: 147px;
  height: 39px;
  -webkit-animation-delay: -16554ms;
  animation-delay: -16554ms;
}
.area:nth-child(71) .building {
  transform: translate(-50%, -50%) translateZ(258px);
}
.area:nth-child(71) .building::before {
  width: 258px;
}
.area:nth-child(71) .building::after {
  height: 258px;
}
.area:nth-child(72) {
  top: 58%;
  left: 15%;
  width: 151px;
  height: 172px;
  -webkit-animation-delay: -11934ms;
  animation-delay: -11934ms;
}
.area:nth-child(72) .building {
  transform: translate(-50%, -50%) translateZ(95px);
}
.area:nth-child(72) .building::before {
  width: 95px;
}
.area:nth-child(72) .building::after {
  height: 95px;
}
.area:nth-child(73) {
  top: 35%;
  left: 51%;
  width: 114px;
  height: 119px;
  -webkit-animation-delay: -3679ms;
  animation-delay: -3679ms;
}
.area:nth-child(73) .building {
  transform: translate(-50%, -50%) translateZ(40px);
}
.area:nth-child(73) .building::before {
  width: 40px;
}
.area:nth-child(73) .building::after {
  height: 40px;
}
.area:nth-child(74) {
  top: 81%;
  left: 64%;
  width: 73px;
  height: 82px;
  -webkit-animation-delay: -6573ms;
  animation-delay: -6573ms;
}
.area:nth-child(74) .building {
  transform: translate(-50%, -50%) translateZ(345px);
}
.area:nth-child(74) .building::before {
  width: 345px;
}
.area:nth-child(74) .building::after {
  height: 345px;
}
.area:nth-child(75) {
  top: 21%;
  left: 108%;
  width: 59px;
  height: 44px;
  -webkit-animation-delay: -31526ms;
  animation-delay: -31526ms;
}
.area:nth-child(75) .building {
  transform: translate(-50%, -50%) translateZ(294px);
}
.area:nth-child(75) .building::before {
  width: 294px;
}
.area:nth-child(75) .building::after {
  height: 294px;
}
.area:nth-child(76) {
  top: 94%;
  left: 14%;
  width: 62px;
  height: 80px;
  -webkit-animation-delay: -30145ms;
  animation-delay: -30145ms;
}
.area:nth-child(76) .building {
  transform: translate(-50%, -50%) translateZ(152px);
}
.area:nth-child(76) .building::before {
  width: 152px;
}
.area:nth-child(76) .building::after {
  height: 152px;
}
.area:nth-child(77) {
  top: 2%;
  left: 2%;
  width: 143px;
  height: 109px;
  -webkit-animation-delay: -4865ms;
  animation-delay: -4865ms;
}
.area:nth-child(77) .building {
  transform: translate(-50%, -50%) translateZ(318px);
}
.area:nth-child(77) .building::before {
  width: 318px;
}
.area:nth-child(77) .building::after {
  height: 318px;
}
.area:nth-child(78) {
  top: 69%;
  left: 43%;
  width: 87px;
  height: 86px;
  -webkit-animation-delay: -33351ms;
  animation-delay: -33351ms;
}
.area:nth-child(78) .building {
  transform: translate(-50%, -50%) translateZ(170px);
}
.area:nth-child(78) .building::before {
  width: 170px;
}
.area:nth-child(78) .building::after {
  height: 170px;
}
.area:nth-child(79) {
  top: 28%;
  left: 86%;
  width: 57px;
  height: 102px;
  -webkit-animation-delay: -10206ms;
  animation-delay: -10206ms;
}
.area:nth-child(79) .building {
  transform: translate(-50%, -50%) translateZ(66px);
}
.area:nth-child(79) .building::before {
  width: 66px;
}
.area:nth-child(79) .building::after {
  height: 66px;
}
.area:nth-child(80) {
  top: 57%;
  left: 99%;
  width: 102px;
  height: 109px;
  -webkit-animation-delay: -4819ms;
  animation-delay: -4819ms;
}
.area:nth-child(80) .building {
  transform: translate(-50%, -50%) translateZ(358px);
}
.area:nth-child(80) .building::before {
  width: 358px;
}
.area:nth-child(80) .building::after {
  height: 358px;
}
.area:nth-child(81) {
  top: 31%;
  left: 35%;
  width: 97px;
  height: 129px;
  -webkit-animation-delay: -37409ms;
  animation-delay: -37409ms;
}
.area:nth-child(81) .building {
  transform: translate(-50%, -50%) translateZ(244px);
}
.area:nth-child(81) .building::before {
  width: 244px;
}
.area:nth-child(81) .building::after {
  height: 244px;
}
.area:nth-child(82) {
  top: 98%;
  left: 79%;
  width: 69px;
  height: 43px;
  -webkit-animation-delay: -13662ms;
  animation-delay: -13662ms;
}
.area:nth-child(82) .building {
  transform: translate(-50%, -50%) translateZ(338px);
}
.area:nth-child(82) .building::before {
  width: 338px;
}
.area:nth-child(82) .building::after {
  height: 338px;
}
.area:nth-child(83) {
  top: 87%;
  left: 70%;
  width: 51px;
  height: 60px;
  -webkit-animation-delay: -11015ms;
  animation-delay: -11015ms;
}
.area:nth-child(83) .building {
  transform: translate(-50%, -50%) translateZ(403px);
}
.area:nth-child(83) .building::before {
  width: 403px;
}
.area:nth-child(83) .building::after {
  height: 403px;
}
.area:nth-child(84) {
  top: 1%;
  left: 118%;
  width: 59px;
  height: 33px;
  -webkit-animation-delay: -3465ms;
  animation-delay: -3465ms;
}
.area:nth-child(84) .building {
  transform: translate(-50%, -50%) translateZ(204px);
}
.area:nth-child(84) .building::before {
  width: 204px;
}
.area:nth-child(84) .building::after {
  height: 204px;
}
.area:nth-child(85) {
  top: 52%;
  left: 27%;
  width: 73px;
  height: 67px;
  -webkit-animation-delay: -25659ms;
  animation-delay: -25659ms;
}
.area:nth-child(85) .building {
  transform: translate(-50%, -50%) translateZ(393px);
}
.area:nth-child(85) .building::before {
  width: 393px;
}
.area:nth-child(85) .building::after {
  height: 393px;
}
.area:nth-child(86) {
  top: 79%;
  left: 65%;
  width: 65px;
  height: 163px;
  -webkit-animation-delay: -13719ms;
  animation-delay: -13719ms;
}
.area:nth-child(86) .building {
  transform: translate(-50%, -50%) translateZ(252px);
}
.area:nth-child(86) .building::before {
  width: 252px;
}
.area:nth-child(86) .building::after {
  height: 252px;
}
.area:nth-child(87) {
  top: 59%;
  left: 35%;
  width: 103px;
  height: 38px;
  -webkit-animation-delay: -17887ms;
  animation-delay: -17887ms;
}
.area:nth-child(87) .building {
  transform: translate(-50%, -50%) translateZ(195px);
}
.area:nth-child(87) .building::before {
  width: 195px;
}
.area:nth-child(87) .building::after {
  height: 195px;
}
.area:nth-child(88) {
  top: 87%;
  left: 57%;
  width: 115px;
  height: 31px;
  -webkit-animation-delay: -39221ms;
  animation-delay: -39221ms;
}
.area:nth-child(88) .building {
  transform: translate(-50%, -50%) translateZ(408px);
}
.area:nth-child(88) .building::before {
  width: 408px;
}
.area:nth-child(88) .building::after {
  height: 408px;
}
.area:nth-child(89) {
  top: 40%;
  left: 63%;
  width: 79px;
  height: 155px;
  -webkit-animation-delay: -23121ms;
  animation-delay: -23121ms;
}
.area:nth-child(89) .building {
  transform: translate(-50%, -50%) translateZ(187px);
}
.area:nth-child(89) .building::before {
  width: 187px;
}
.area:nth-child(89) .building::after {
  height: 187px;
}
.area:nth-child(90) {
  top: 84%;
  left: 33%;
  width: 72px;
  height: 111px;
  -webkit-animation-delay: -37776ms;
  animation-delay: -37776ms;
}
.area:nth-child(90) .building {
  transform: translate(-50%, -50%) translateZ(337px);
}
.area:nth-child(90) .building::before {
  width: 337px;
}
.area:nth-child(90) .building::after {
  height: 337px;
}
.area:nth-child(91) {
  top: 22%;
  left: 100%;
  width: 171px;
  height: 84px;
  -webkit-animation-delay: -9374ms;
  animation-delay: -9374ms;
}
.area:nth-child(91) .building {
  transform: translate(-50%, -50%) translateZ(163px);
}
.area:nth-child(91) .building::before {
  width: 163px;
}
.area:nth-child(91) .building::after {
  height: 163px;
}
.area:nth-child(92) {
  top: 36%;
  left: -4%;
  width: 53px;
  height: 113px;
  -webkit-animation-delay: -39900ms;
  animation-delay: -39900ms;
}
.area:nth-child(92) .building {
  transform: translate(-50%, -50%) translateZ(353px);
}
.area:nth-child(92) .building::before {
  width: 353px;
}
.area:nth-child(92) .building::after {
  height: 353px;
}
.area:nth-child(93) {
  top: 27%;
  left: 62%;
  width: 72px;
  height: 70px;
  -webkit-animation-delay: -16075ms;
  animation-delay: -16075ms;
}
.area:nth-child(93) .building {
  transform: translate(-50%, -50%) translateZ(226px);
}
.area:nth-child(93) .building::before {
  width: 226px;
}
.area:nth-child(93) .building::after {
  height: 226px;
}
.area:nth-child(94) {
  top: 98%;
  left: 21%;
  width: 154px;
  height: 144px;
  -webkit-animation-delay: -4597ms;
  animation-delay: -4597ms;
}
.area:nth-child(94) .building {
  transform: translate(-50%, -50%) translateZ(368px);
}
.area:nth-child(94) .building::before {
  width: 368px;
}
.area:nth-child(94) .building::after {
  height: 368px;
}
.area:nth-child(95) {
  top: 82%;
  left: 13%;
  width: 131px;
  height: 55px;
  -webkit-animation-delay: -37078ms;
  animation-delay: -37078ms;
}
.area:nth-child(95) .building {
  transform: translate(-50%, -50%) translateZ(371px);
}
.area:nth-child(95) .building::before {
  width: 371px;
}
.area:nth-child(95) .building::after {
  height: 371px;
}
.area:nth-child(96) {
  top: 95%;
  left: 69%;
  width: 57px;
  height: 148px;
  -webkit-animation-delay: -24534ms;
  animation-delay: -24534ms;
}
.area:nth-child(96) .building {
  transform: translate(-50%, -50%) translateZ(193px);
}
.area:nth-child(96) .building::before {
  width: 193px;
}
.area:nth-child(96) .building::after {
  height: 193px;
}
.area:nth-child(97) {
  top: 62%;
  left: 18%;
  width: 38px;
  height: 133px;
  -webkit-animation-delay: -11594ms;
  animation-delay: -11594ms;
}
.area:nth-child(97) .building {
  transform: translate(-50%, -50%) translateZ(219px);
}
.area:nth-child(97) .building::before {
  width: 219px;
}
.area:nth-child(97) .building::after {
  height: 219px;
}
.area:nth-child(98) {
  top: 55%;
  left: 93%;
  width: 147px;
  height: 72px;
  -webkit-animation-delay: -21270ms;
  animation-delay: -21270ms;
}
.area:nth-child(98) .building {
  transform: translate(-50%, -50%) translateZ(267px);
}
.area:nth-child(98) .building::before {
  width: 267px;
}
.area:nth-child(98) .building::after {
  height: 267px;
}
.area:nth-child(99) {
  top: 74%;
  left: 25%;
  width: 107px;
  height: 166px;
  -webkit-animation-delay: -25123ms;
  animation-delay: -25123ms;
}
.area:nth-child(99) .building {
  transform: translate(-50%, -50%) translateZ(413px);
}
.area:nth-child(99) .building::before {
  width: 413px;
}
.area:nth-child(99) .building::after {
  height: 413px;
}
.area:nth-child(100) {
  top: 26%;
  left: 50%;
  width: 158px;
  height: 88px;
  -webkit-animation-delay: -35374ms;
  animation-delay: -35374ms;
}
.area:nth-child(100) .building {
  transform: translate(-50%, -50%) translateZ(56px);
}
.area:nth-child(100) .building::before {
  width: 56px;
}
.area:nth-child(100) .building::after {
  height: 56px;
}
.area:nth-child(101) {
  top: 51%;
  left: 120%;
  width: 174px;
  height: 164px;
  -webkit-animation-delay: -17760ms;
  animation-delay: -17760ms;
}
.area:nth-child(101) .building {
  transform: translate(-50%, -50%) translateZ(90px);
}
.area:nth-child(101) .building::before {
  width: 90px;
}
.area:nth-child(101) .building::after {
  height: 90px;
}
.area:nth-child(102) {
  top: 89%;
  left: -7%;
  width: 112px;
  height: 108px;
  -webkit-animation-delay: -21920ms;
  animation-delay: -21920ms;
}
.area:nth-child(102) .building {
  transform: translate(-50%, -50%) translateZ(243px);
}
.area:nth-child(102) .building::before {
  width: 243px;
}
.area:nth-child(102) .building::after {
  height: 243px;
}
.area:nth-child(103) {
  top: 63%;
  left: -3%;
  width: 58px;
  height: 137px;
  -webkit-animation-delay: -30300ms;
  animation-delay: -30300ms;
}
.area:nth-child(103) .building {
  transform: translate(-50%, -50%) translateZ(122px);
}
.area:nth-child(103) .building::before {
  width: 122px;
}
.area:nth-child(103) .building::after {
  height: 122px;
}
.area:nth-child(104) {
  top: 38%;
  left: 106%;
  width: 162px;
  height: 101px;
  -webkit-animation-delay: -23446ms;
  animation-delay: -23446ms;
}
.area:nth-child(104) .building {
  transform: translate(-50%, -50%) translateZ(290px);
}
.area:nth-child(104) .building::before {
  width: 290px;
}
.area:nth-child(104) .building::after {
  height: 290px;
}
.area:nth-child(105) {
  top: 61%;
  left: 48%;
  width: 77px;
  height: 108px;
  -webkit-animation-delay: -35139ms;
  animation-delay: -35139ms;
}
.area:nth-child(105) .building {
  transform: translate(-50%, -50%) translateZ(101px);
}
.area:nth-child(105) .building::before {
  width: 101px;
}
.area:nth-child(105) .building::after {
  height: 101px;
}
.area:nth-child(106) {
  top: 91%;
  left: 93%;
  width: 140px;
  height: 124px;
  -webkit-animation-delay: -6761ms;
  animation-delay: -6761ms;
}
.area:nth-child(106) .building {
  transform: translate(-50%, -50%) translateZ(206px);
}
.area:nth-child(106) .building::before {
  width: 206px;
}
.area:nth-child(106) .building::after {
  height: 206px;
}
.area:nth-child(107) {
  top: 57%;
  left: 104%;
  width: 108px;
  height: 106px;
  -webkit-animation-delay: -33918ms;
  animation-delay: -33918ms;
}
.area:nth-child(107) .building {
  transform: translate(-50%, -50%) translateZ(132px);
}
.area:nth-child(107) .building::before {
  width: 132px;
}
.area:nth-child(107) .building::after {
  height: 132px;
}
.area:nth-child(108) {
  top: 93%;
  left: 57%;
  width: 94px;
  height: 147px;
  -webkit-animation-delay: -3431ms;
  animation-delay: -3431ms;
}
.area:nth-child(108) .building {
  transform: translate(-50%, -50%) translateZ(252px);
}
.area:nth-child(108) .building::before {
  width: 252px;
}
.area:nth-child(108) .building::after {
  height: 252px;
}
.area:nth-child(109) {
  top: 1%;
  left: 16%;
  width: 71px;
  height: 156px;
  -webkit-animation-delay: -17406ms;
  animation-delay: -17406ms;
}
.area:nth-child(109) .building {
  transform: translate(-50%, -50%) translateZ(148px);
}
.area:nth-child(109) .building::before {
  width: 148px;
}
.area:nth-child(109) .building::after {
  height: 148px;
}
.area:nth-child(110) {
  top: 89%;
  left: 46%;
  width: 175px;
  height: 152px;
  -webkit-animation-delay: -35838ms;
  animation-delay: -35838ms;
}
.area:nth-child(110) .building {
  transform: translate(-50%, -50%) translateZ(341px);
}
.area:nth-child(110) .building::before {
  width: 341px;
}
.area:nth-child(110) .building::after {
  height: 341px;
}
.area:nth-child(111) {
  top: 69%;
  left: 4%;
  width: 124px;
  height: 128px;
  -webkit-animation-delay: -5952ms;
  animation-delay: -5952ms;
}
.area:nth-child(111) .building {
  transform: translate(-50%, -50%) translateZ(359px);
}
.area:nth-child(111) .building::before {
  width: 359px;
}
.area:nth-child(111) .building::after {
  height: 359px;
}
.area:nth-child(112) {
  top: 94%;
  left: 12%;
  width: 126px;
  height: 81px;
  -webkit-animation-delay: -246ms;
  animation-delay: -246ms;
}
.area:nth-child(112) .building {
  transform: translate(-50%, -50%) translateZ(256px);
}
.area:nth-child(112) .building::before {
  width: 256px;
}
.area:nth-child(112) .building::after {
  height: 256px;
}
.area:nth-child(113) {
  top: 50%;
  left: 73%;
  width: 169px;
  height: 142px;
  -webkit-animation-delay: -38587ms;
  animation-delay: -38587ms;
}
.area:nth-child(113) .building {
  transform: translate(-50%, -50%) translateZ(153px);
}
.area:nth-child(113) .building::before {
  width: 153px;
}
.area:nth-child(113) .building::after {
  height: 153px;
}
.area:nth-child(114) {
  top: 81%;
  left: 118%;
  width: 88px;
  height: 139px;
  -webkit-animation-delay: -7237ms;
  animation-delay: -7237ms;
}
.area:nth-child(114) .building {
  transform: translate(-50%, -50%) translateZ(201px);
}
.area:nth-child(114) .building::before {
  width: 201px;
}
.area:nth-child(114) .building::after {
  height: 201px;
}
.area:nth-child(115) {
  top: 36%;
  left: 14%;
  width: 132px;
  height: 48px;
  -webkit-animation-delay: -32166ms;
  animation-delay: -32166ms;
}
.area:nth-child(115) .building {
  transform: translate(-50%, -50%) translateZ(99px);
}
.area:nth-child(115) .building::before {
  width: 99px;
}
.area:nth-child(115) .building::after {
  height: 99px;
}
.area:nth-child(116) {
  top: 22%;
  left: 45%;
  width: 83px;
  height: 60px;
  -webkit-animation-delay: -11667ms;
  animation-delay: -11667ms;
}
.area:nth-child(116) .building {
  transform: translate(-50%, -50%) translateZ(385px);
}
.area:nth-child(116) .building::before {
  width: 385px;
}
.area:nth-child(116) .building::after {
  height: 385px;
}
.area:nth-child(117) {
  top: 51%;
  left: -17%;
  width: 88px;
  height: 59px;
  -webkit-animation-delay: -33745ms;
  animation-delay: -33745ms;
}
.area:nth-child(117) .building {
  transform: translate(-50%, -50%) translateZ(191px);
}
.area:nth-child(117) .building::before {
  width: 191px;
}
.area:nth-child(117) .building::after {
  height: 191px;
}
.area:nth-child(118) {
  top: 17%;
  left: 67%;
  width: 118px;
  height: 143px;
  -webkit-animation-delay: -23899ms;
  animation-delay: -23899ms;
}
.area:nth-child(118) .building {
  transform: translate(-50%, -50%) translateZ(142px);
}
.area:nth-child(118) .building::before {
  width: 142px;
}
.area:nth-child(118) .building::after {
  height: 142px;
}
.area:nth-child(119) {
  top: 47%;
  left: 44%;
  width: 37px;
  height: 100px;
  -webkit-animation-delay: -1504ms;
  animation-delay: -1504ms;
}
.area:nth-child(119) .building {
  transform: translate(-50%, -50%) translateZ(309px);
}
.area:nth-child(119) .building::before {
  width: 309px;
}
.area:nth-child(119) .building::after {
  height: 309px;
}
.area:nth-child(120) {
  top: 97%;
  left: 104%;
  width: 61px;
  height: 40px;
  -webkit-animation-delay: -23097ms;
  animation-delay: -23097ms;
}
.area:nth-child(120) .building {
  transform: translate(-50%, -50%) translateZ(214px);
}
.area:nth-child(120) .building::before {
  width: 214px;
}
.area:nth-child(120) .building::after {
  height: 214px;
}
.area:nth-child(121) {
  top: 8%;
  left: 60%;
  width: 89px;
  height: 162px;
  -webkit-animation-delay: -14391ms;
  animation-delay: -14391ms;
}
.area:nth-child(121) .building {
  transform: translate(-50%, -50%) translateZ(210px);
}
.area:nth-child(121) .building::before {
  width: 210px;
}
.area:nth-child(121) .building::after {
  height: 210px;
}
.area:nth-child(122) {
  top: 76%;
  left: 4%;
  width: 135px;
  height: 32px;
  -webkit-animation-delay: -31742ms;
  animation-delay: -31742ms;
}
.area:nth-child(122) .building {
  transform: translate(-50%, -50%) translateZ(389px);
}
.area:nth-child(122) .building::before {
  width: 389px;
}
.area:nth-child(122) .building::after {
  height: 389px;
}
.area:nth-child(123) {
  top: 57%;
  left: 99%;
  width: 60px;
  height: 143px;
  -webkit-animation-delay: -25877ms;
  animation-delay: -25877ms;
}
.area:nth-child(123) .building {
  transform: translate(-50%, -50%) translateZ(50px);
}
.area:nth-child(123) .building::before {
  width: 50px;
}
.area:nth-child(123) .building::after {
  height: 50px;
}
.area:nth-child(124) {
  top: 79%;
  left: 103%;
  width: 106px;
  height: 51px;
  -webkit-animation-delay: -25706ms;
  animation-delay: -25706ms;
}
.area:nth-child(124) .building {
  transform: translate(-50%, -50%) translateZ(183px);
}
.area:nth-child(124) .building::before {
  width: 183px;
}
.area:nth-child(124) .building::after {
  height: 183px;
}
.area:nth-child(125) {
  top: 3%;
  left: -2%;
  width: 177px;
  height: 64px;
  -webkit-animation-delay: -3764ms;
  animation-delay: -3764ms;
}
.area:nth-child(125) .building {
  transform: translate(-50%, -50%) translateZ(290px);
}
.area:nth-child(125) .building::before {
  width: 290px;
}
.area:nth-child(125) .building::after {
  height: 290px;
}
.area:nth-child(126) {
  top: 83%;
  left: 46%;
  width: 107px;
  height: 161px;
  -webkit-animation-delay: -36659ms;
  animation-delay: -36659ms;
}
.area:nth-child(126) .building {
  transform: translate(-50%, -50%) translateZ(321px);
}
.area:nth-child(126) .building::before {
  width: 321px;
}
.area:nth-child(126) .building::after {
  height: 321px;
}
.area:nth-child(127) {
  top: 31%;
  left: 5%;
  width: 176px;
  height: 88px;
  -webkit-animation-delay: -20111ms;
  animation-delay: -20111ms;
}
.area:nth-child(127) .building {
  transform: translate(-50%, -50%) translateZ(260px);
}
.area:nth-child(127) .building::before {
  width: 260px;
}
.area:nth-child(127) .building::after {
  height: 260px;
}
.area:nth-child(128) {
  top: 49%;
  left: 54%;
  width: 59px;
  height: 106px;
  -webkit-animation-delay: -21208ms;
  animation-delay: -21208ms;
}
.area:nth-child(128) .building {
  transform: translate(-50%, -50%) translateZ(170px);
}
.area:nth-child(128) .building::before {
  width: 170px;
}
.area:nth-child(128) .building::after {
  height: 170px;
}
.area:nth-child(129) {
  top: 54%;
  left: 6%;
  width: 74px;
  height: 175px;
  -webkit-animation-delay: -565ms;
  animation-delay: -565ms;
}
.area:nth-child(129) .building {
  transform: translate(-50%, -50%) translateZ(194px);
}
.area:nth-child(129) .building::before {
  width: 194px;
}
.area:nth-child(129) .building::after {
  height: 194px;
}
.area:nth-child(130) {
  top: 76%;
  left: 25%;
  width: 37px;
  height: 167px;
  -webkit-animation-delay: -1178ms;
  animation-delay: -1178ms;
}
.area:nth-child(130) .building {
  transform: translate(-50%, -50%) translateZ(137px);
}
.area:nth-child(130) .building::before {
  width: 137px;
}
.area:nth-child(130) .building::after {
  height: 137px;
}
.area:nth-child(131) {
  top: 26%;
  left: 48%;
  width: 114px;
  height: 95px;
  -webkit-animation-delay: -15022ms;
  animation-delay: -15022ms;
}
.area:nth-child(131) .building {
  transform: translate(-50%, -50%) translateZ(50px);
}
.area:nth-child(131) .building::before {
  width: 50px;
}
.area:nth-child(131) .building::after {
  height: 50px;
}
.area:nth-child(132) {
  top: 81%;
  left: 110%;
  width: 99px;
  height: 78px;
  -webkit-animation-delay: -3633ms;
  animation-delay: -3633ms;
}
.area:nth-child(132) .building {
  transform: translate(-50%, -50%) translateZ(124px);
}
.area:nth-child(132) .building::before {
  width: 124px;
}
.area:nth-child(132) .building::after {
  height: 124px;
}
.area:nth-child(133) {
  top: 79%;
  left: -13%;
  width: 167px;
  height: 118px;
  -webkit-animation-delay: -21260ms;
  animation-delay: -21260ms;
}
.area:nth-child(133) .building {
  transform: translate(-50%, -50%) translateZ(409px);
}
.area:nth-child(133) .building::before {
  width: 409px;
}
.area:nth-child(133) .building::after {
  height: 409px;
}
.area:nth-child(134) {
  top: 33%;
  left: 54%;
  width: 50px;
  height: 62px;
  -webkit-animation-delay: -16075ms;
  animation-delay: -16075ms;
}
.area:nth-child(134) .building {
  transform: translate(-50%, -50%) translateZ(287px);
}
.area:nth-child(134) .building::before {
  width: 287px;
}
.area:nth-child(134) .building::after {
  height: 287px;
}
.area:nth-child(135) {
  top: 90%;
  left: 56%;
  width: 171px;
  height: 121px;
  -webkit-animation-delay: -25710ms;
  animation-delay: -25710ms;
}
.area:nth-child(135) .building {
  transform: translate(-50%, -50%) translateZ(303px);
}
.area:nth-child(135) .building::before {
  width: 303px;
}
.area:nth-child(135) .building::after {
  height: 303px;
}
.area:nth-child(136) {
  top: 79%;
  left: 62%;
  width: 48px;
  height: 48px;
  -webkit-animation-delay: -14443ms;
  animation-delay: -14443ms;
}
.area:nth-child(136) .building {
  transform: translate(-50%, -50%) translateZ(90px);
}
.area:nth-child(136) .building::before {
  width: 90px;
}
.area:nth-child(136) .building::after {
  height: 90px;
}
.area:nth-child(137) {
  top: 67%;
  left: 67%;
  width: 41px;
  height: 61px;
  -webkit-animation-delay: -17736ms;
  animation-delay: -17736ms;
}
.area:nth-child(137) .building {
  transform: translate(-50%, -50%) translateZ(99px);
}
.area:nth-child(137) .building::before {
  width: 99px;
}
.area:nth-child(137) .building::after {
  height: 99px;
}
.area:nth-child(138) {
  top: 44%;
  left: 87%;
  width: 86px;
  height: 120px;
  -webkit-animation-delay: -19543ms;
  animation-delay: -19543ms;
}
.area:nth-child(138) .building {
  transform: translate(-50%, -50%) translateZ(415px);
}
.area:nth-child(138) .building::before {
  width: 415px;
}
.area:nth-child(138) .building::after {
  height: 415px;
}
.area:nth-child(139) {
  top: 48%;
  left: -9%;
  width: 66px;
  height: 48px;
  -webkit-animation-delay: -18672ms;
  animation-delay: -18672ms;
}
.area:nth-child(139) .building {
  transform: translate(-50%, -50%) translateZ(209px);
}
.area:nth-child(139) .building::before {
  width: 209px;
}
.area:nth-child(139) .building::after {
  height: 209px;
}
.area:nth-child(140) {
  top: 78%;
  left: 74%;
  width: 82px;
  height: 95px;
  -webkit-animation-delay: -14941ms;
  animation-delay: -14941ms;
}
.area:nth-child(140) .building {
  transform: translate(-50%, -50%) translateZ(372px);
}
.area:nth-child(140) .building::before {
  width: 372px;
}
.area:nth-child(140) .building::after {
  height: 372px;
}
.area:nth-child(141) {
  top: 96%;
  left: -17%;
  width: 134px;
  height: 91px;
  -webkit-animation-delay: -35891ms;
  animation-delay: -35891ms;
}
.area:nth-child(141) .building {
  transform: translate(-50%, -50%) translateZ(56px);
}
.area:nth-child(141) .building::before {
  width: 56px;
}
.area:nth-child(141) .building::after {
  height: 56px;
}
.area:nth-child(142) {
  top: 74%;
  left: 101%;
  width: 46px;
  height: 84px;
  -webkit-animation-delay: -22248ms;
  animation-delay: -22248ms;
}
.area:nth-child(142) .building {
  transform: translate(-50%, -50%) translateZ(313px);
}
.area:nth-child(142) .building::before {
  width: 313px;
}
.area:nth-child(142) .building::after {
  height: 313px;
}
.area:nth-child(143) {
  top: 29%;
  left: -15%;
  width: 78px;
  height: 58px;
  -webkit-animation-delay: -25850ms;
  animation-delay: -25850ms;
}
.area:nth-child(143) .building {
  transform: translate(-50%, -50%) translateZ(71px);
}
.area:nth-child(143) .building::before {
  width: 71px;
}
.area:nth-child(143) .building::after {
  height: 71px;
}
.area:nth-child(144) {
  top: 69%;
  left: 64%;
  width: 32px;
  height: 127px;
  -webkit-animation-delay: -15507ms;
  animation-delay: -15507ms;
}
.area:nth-child(144) .building {
  transform: translate(-50%, -50%) translateZ(167px);
}
.area:nth-child(144) .building::before {
  width: 167px;
}
.area:nth-child(144) .building::after {
  height: 167px;
}
.area:nth-child(145) {
  top: 42%;
  left: 103%;
  width: 92px;
  height: 74px;
  -webkit-animation-delay: -24544ms;
  animation-delay: -24544ms;
}
.area:nth-child(145) .building {
  transform: translate(-50%, -50%) translateZ(406px);
}
.area:nth-child(145) .building::before {
  width: 406px;
}
.area:nth-child(145) .building::after {
  height: 406px;
}
.area:nth-child(146) {
  top: 8%;
  left: 112%;
  width: 111px;
  height: 164px;
  -webkit-animation-delay: -3214ms;
  animation-delay: -3214ms;
}
.area:nth-child(146) .building {
  transform: translate(-50%, -50%) translateZ(217px);
}
.area:nth-child(146) .building::before {
  width: 217px;
}
.area:nth-child(146) .building::after {
  height: 217px;
}
.area:nth-child(147) {
  top: 29%;
  left: 16%;
  width: 89px;
  height: 137px;
  -webkit-animation-delay: -23833ms;
  animation-delay: -23833ms;
}
.area:nth-child(147) .building {
  transform: translate(-50%, -50%) translateZ(150px);
}
.area:nth-child(147) .building::before {
  width: 150px;
}
.area:nth-child(147) .building::after {
  height: 150px;
}
.area:nth-child(148) {
  top: 55%;
  left: 103%;
  width: 144px;
  height: 146px;
  -webkit-animation-delay: -37619ms;
  animation-delay: -37619ms;
}
.area:nth-child(148) .building {
  transform: translate(-50%, -50%) translateZ(93px);
}
.area:nth-child(148) .building::before {
  width: 93px;
}
.area:nth-child(148) .building::after {
  height: 93px;
}
.area:nth-child(149) {
  top: 3%;
  left: 17%;
  width: 120px;
  height: 63px;
  -webkit-animation-delay: -12095ms;
  animation-delay: -12095ms;
}
.area:nth-child(149) .building {
  transform: translate(-50%, -50%) translateZ(331px);
}
.area:nth-child(149) .building::before {
  width: 331px;
}
.area:nth-child(149) .building::after {
  height: 331px;
}
.area:nth-child(150) {
  top: 9%;
  left: 11%;
  width: 58px;
  height: 163px;
  -webkit-animation-delay: -12980ms;
  animation-delay: -12980ms;
}
.area:nth-child(150) .building {
  transform: translate(-50%, -50%) translateZ(154px);
}
.area:nth-child(150) .building::before {
  width: 154px;
}
.area:nth-child(150) .building::after {
  height: 154px;
}
.area:nth-child(151) {
  top: 39%;
  left: 22%;
  width: 41px;
  height: 98px;
  -webkit-animation-delay: -1454ms;
  animation-delay: -1454ms;
}
.area:nth-child(151) .building {
  transform: translate(-50%, -50%) translateZ(109px);
}
.area:nth-child(151) .building::before {
  width: 109px;
}
.area:nth-child(151) .building::after {
  height: 109px;
}
.area:nth-child(152) {
  top: 92%;
  left: 19%;
  width: 168px;
  height: 171px;
  -webkit-animation-delay: -32353ms;
  animation-delay: -32353ms;
}
.area:nth-child(152) .building {
  transform: translate(-50%, -50%) translateZ(418px);
}
.area:nth-child(152) .building::before {
  width: 418px;
}
.area:nth-child(152) .building::after {
  height: 418px;
}
.area:nth-child(153) {
  top: 89%;
  left: 37%;
  width: 40px;
  height: 47px;
  -webkit-animation-delay: -3844ms;
  animation-delay: -3844ms;
}
.area:nth-child(153) .building {
  transform: translate(-50%, -50%) translateZ(50px);
}
.area:nth-child(153) .building::before {
  width: 50px;
}
.area:nth-child(153) .building::after {
  height: 50px;
}
.area:nth-child(154) {
  top: 77%;
  left: 68%;
  width: 114px;
  height: 177px;
  -webkit-animation-delay: -2188ms;
  animation-delay: -2188ms;
}
.area:nth-child(154) .building {
  transform: translate(-50%, -50%) translateZ(64px);
}
.area:nth-child(154) .building::before {
  width: 64px;
}
.area:nth-child(154) .building::after {
  height: 64px;
}
.area:nth-child(155) {
  top: 24%;
  left: 28%;
  width: 126px;
  height: 120px;
  -webkit-animation-delay: -20897ms;
  animation-delay: -20897ms;
}
.area:nth-child(155) .building {
  transform: translate(-50%, -50%) translateZ(198px);
}
.area:nth-child(155) .building::before {
  width: 198px;
}
.area:nth-child(155) .building::after {
  height: 198px;
}
.area:nth-child(156) {
  top: 50%;
  left: 95%;
  width: 110px;
  height: 85px;
  -webkit-animation-delay: -2063ms;
  animation-delay: -2063ms;
}
.area:nth-child(156) .building {
  transform: translate(-50%, -50%) translateZ(381px);
}
.area:nth-child(156) .building::before {
  width: 381px;
}
.area:nth-child(156) .building::after {
  height: 381px;
}
.area:nth-child(157) {
  top: 17%;
  left: 67%;
  width: 83px;
  height: 90px;
  -webkit-animation-delay: -25725ms;
  animation-delay: -25725ms;
}
.area:nth-child(157) .building {
  transform: translate(-50%, -50%) translateZ(378px);
}
.area:nth-child(157) .building::before {
  width: 378px;
}
.area:nth-child(157) .building::after {
  height: 378px;
}
.area:nth-child(158) {
  top: 23%;
  left: 95%;
  width: 176px;
  height: 71px;
  -webkit-animation-delay: -30ms;
  animation-delay: -30ms;
}
.area:nth-child(158) .building {
  transform: translate(-50%, -50%) translateZ(51px);
}
.area:nth-child(158) .building::before {
  width: 51px;
}
.area:nth-child(158) .building::after {
  height: 51px;
}
.area:nth-child(159) {
  top: 48%;
  left: 12%;
  width: 58px;
  height: 139px;
  -webkit-animation-delay: -14644ms;
  animation-delay: -14644ms;
}
.area:nth-child(159) .building {
  transform: translate(-50%, -50%) translateZ(280px);
}
.area:nth-child(159) .building::before {
  width: 280px;
}
.area:nth-child(159) .building::after {
  height: 280px;
}
.area:nth-child(160) {
  top: 76%;
  left: 1%;
  width: 115px;
  height: 129px;
  -webkit-animation-delay: -19642ms;
  animation-delay: -19642ms;
}
.area:nth-child(160) .building {
  transform: translate(-50%, -50%) translateZ(334px);
}
.area:nth-child(160) .building::before {
  width: 334px;
}
.area:nth-child(160) .building::after {
  height: 334px;
}
.area:nth-child(161) {
  top: 46%;
  left: 95%;
  width: 109px;
  height: 80px;
  -webkit-animation-delay: -31515ms;
  animation-delay: -31515ms;
}
.area:nth-child(161) .building {
  transform: translate(-50%, -50%) translateZ(318px);
}
.area:nth-child(161) .building::before {
  width: 318px;
}
.area:nth-child(161) .building::after {
  height: 318px;
}
.area:nth-child(162) {
  top: 85%;
  left: 97%;
  width: 107px;
  height: 100px;
  -webkit-animation-delay: -8861ms;
  animation-delay: -8861ms;
}
.area:nth-child(162) .building {
  transform: translate(-50%, -50%) translateZ(303px);
}
.area:nth-child(162) .building::before {
  width: 303px;
}
.area:nth-child(162) .building::after {
  height: 303px;
}
.area:nth-child(163) {
  top: 17%;
  left: 84%;
  width: 42px;
  height: 125px;
  -webkit-animation-delay: -20505ms;
  animation-delay: -20505ms;
}
.area:nth-child(163) .building {
  transform: translate(-50%, -50%) translateZ(116px);
}
.area:nth-child(163) .building::before {
  width: 116px;
}
.area:nth-child(163) .building::after {
  height: 116px;
}
.area:nth-child(164) {
  top: 6%;
  left: 27%;
  width: 62px;
  height: 152px;
  -webkit-animation-delay: -13837ms;
  animation-delay: -13837ms;
}
.area:nth-child(164) .building {
  transform: translate(-50%, -50%) translateZ(273px);
}
.area:nth-child(164) .building::before {
  width: 273px;
}
.area:nth-child(164) .building::after {
  height: 273px;
}
.area:nth-child(165) {
  top: 37%;
  left: 73%;
  width: 89px;
  height: 79px;
  -webkit-animation-delay: -4407ms;
  animation-delay: -4407ms;
}
.area:nth-child(165) .building {
  transform: translate(-50%, -50%) translateZ(256px);
}
.area:nth-child(165) .building::before {
  width: 256px;
}
.area:nth-child(165) .building::after {
  height: 256px;
}
.area:nth-child(166) {
  top: 33%;
  left: 39%;
  width: 104px;
  height: 38px;
  -webkit-animation-delay: -21916ms;
  animation-delay: -21916ms;
}
.area:nth-child(166) .building {
  transform: translate(-50%, -50%) translateZ(323px);
}
.area:nth-child(166) .building::before {
  width: 323px;
}
.area:nth-child(166) .building::after {
  height: 323px;
}
.area:nth-child(167) {
  top: 47%;
  left: 107%;
  width: 85px;
  height: 105px;
  -webkit-animation-delay: -3384ms;
  animation-delay: -3384ms;
}
.area:nth-child(167) .building {
  transform: translate(-50%, -50%) translateZ(354px);
}
.area:nth-child(167) .building::before {
  width: 354px;
}
.area:nth-child(167) .building::after {
  height: 354px;
}
.area:nth-child(168) {
  top: 37%;
  left: 32%;
  width: 174px;
  height: 56px;
  -webkit-animation-delay: -31238ms;
  animation-delay: -31238ms;
}
.area:nth-child(168) .building {
  transform: translate(-50%, -50%) translateZ(244px);
}
.area:nth-child(168) .building::before {
  width: 244px;
}
.area:nth-child(168) .building::after {
  height: 244px;
}
.area:nth-child(169) {
  top: 100%;
  left: 53%;
  width: 73px;
  height: 161px;
  -webkit-animation-delay: -7108ms;
  animation-delay: -7108ms;
}
.area:nth-child(169) .building {
  transform: translate(-50%, -50%) translateZ(386px);
}
.area:nth-child(169) .building::before {
  width: 386px;
}
.area:nth-child(169) .building::after {
  height: 386px;
}
.area:nth-child(170) {
  top: 93%;
  left: 36%;
  width: 133px;
  height: 138px;
  -webkit-animation-delay: -8336ms;
  animation-delay: -8336ms;
}
.area:nth-child(170) .building {
  transform: translate(-50%, -50%) translateZ(194px);
}
.area:nth-child(170) .building::before {
  width: 194px;
}
.area:nth-child(170) .building::after {
  height: 194px;
}
.area:nth-child(171) {
  top: 41%;
  left: 105%;
  width: 68px;
  height: 74px;
  -webkit-animation-delay: -20805ms;
  animation-delay: -20805ms;
}
.area:nth-child(171) .building {
  transform: translate(-50%, -50%) translateZ(296px);
}
.area:nth-child(171) .building::before {
  width: 296px;
}
.area:nth-child(171) .building::after {
  height: 296px;
}
.area:nth-child(172) {
  top: 48%;
  left: 88%;
  width: 67px;
  height: 105px;
  -webkit-animation-delay: -39160ms;
  animation-delay: -39160ms;
}
.area:nth-child(172) .building {
  transform: translate(-50%, -50%) translateZ(290px);
}
.area:nth-child(172) .building::before {
  width: 290px;
}
.area:nth-child(172) .building::after {
  height: 290px;
}
.area:nth-child(173) {
  top: 71%;
  left: 76%;
  width: 85px;
  height: 88px;
  -webkit-animation-delay: -2504ms;
  animation-delay: -2504ms;
}
.area:nth-child(173) .building {
  transform: translate(-50%, -50%) translateZ(366px);
}
.area:nth-child(173) .building::before {
  width: 366px;
}
.area:nth-child(173) .building::after {
  height: 366px;
}
.area:nth-child(174) {
  top: 5%;
  left: 43%;
  width: 116px;
  height: 35px;
  -webkit-animation-delay: -19428ms;
  animation-delay: -19428ms;
}
.area:nth-child(174) .building {
  transform: translate(-50%, -50%) translateZ(284px);
}
.area:nth-child(174) .building::before {
  width: 284px;
}
.area:nth-child(174) .building::after {
  height: 284px;
}
.area:nth-child(175) {
  top: 50%;
  left: 102%;
  width: 78px;
  height: 96px;
  -webkit-animation-delay: -4492ms;
  animation-delay: -4492ms;
}
.area:nth-child(175) .building {
  transform: translate(-50%, -50%) translateZ(326px);
}
.area:nth-child(175) .building::before {
  width: 326px;
}
.area:nth-child(175) .building::after {
  height: 326px;
}
.area:nth-child(176) {
  top: 96%;
  left: 85%;
  width: 39px;
  height: 141px;
  -webkit-animation-delay: -25309ms;
  animation-delay: -25309ms;
}
.area:nth-child(176) .building {
  transform: translate(-50%, -50%) translateZ(316px);
}
.area:nth-child(176) .building::before {
  width: 316px;
}
.area:nth-child(176) .building::after {
  height: 316px;
}
.area:nth-child(177) {
  top: 88%;
  left: 43%;
  width: 137px;
  height: 147px;
  -webkit-animation-delay: -11792ms;
  animation-delay: -11792ms;
}
.area:nth-child(177) .building {
  transform: translate(-50%, -50%) translateZ(119px);
}
.area:nth-child(177) .building::before {
  width: 119px;
}
.area:nth-child(177) .building::after {
  height: 119px;
}
.area:nth-child(178) {
  top: 90%;
  left: 38%;
  width: 141px;
  height: 36px;
  -webkit-animation-delay: -30436ms;
  animation-delay: -30436ms;
}
.area:nth-child(178) .building {
  transform: translate(-50%, -50%) translateZ(153px);
}
.area:nth-child(178) .building::before {
  width: 153px;
}
.area:nth-child(178) .building::after {
  height: 153px;
}
.area:nth-child(179) {
  top: 100%;
  left: 109%;
  width: 44px;
  height: 107px;
  -webkit-animation-delay: -11796ms;
  animation-delay: -11796ms;
}
.area:nth-child(179) .building {
  transform: translate(-50%, -50%) translateZ(225px);
}
.area:nth-child(179) .building::before {
  width: 225px;
}
.area:nth-child(179) .building::after {
  height: 225px;
}
.area:nth-child(180) {
  top: 67%;
  left: 46%;
  width: 82px;
  height: 169px;
  -webkit-animation-delay: -5613ms;
  animation-delay: -5613ms;
}
.area:nth-child(180) .building {
  transform: translate(-50%, -50%) translateZ(264px);
}
.area:nth-child(180) .building::before {
  width: 264px;
}
.area:nth-child(180) .building::after {
  height: 264px;
}
.area:nth-child(181) {
  top: 34%;
  left: 42%;
  width: 145px;
  height: 51px;
  -webkit-animation-delay: -18240ms;
  animation-delay: -18240ms;
}
.area:nth-child(181) .building {
  transform: translate(-50%, -50%) translateZ(215px);
}
.area:nth-child(181) .building::before {
  width: 215px;
}
.area:nth-child(181) .building::after {
  height: 215px;
}
.area:nth-child(182) {
  top: 13%;
  left: 55%;
  width: 31px;
  height: 107px;
  -webkit-animation-delay: -5227ms;
  animation-delay: -5227ms;
}
.area:nth-child(182) .building {
  transform: translate(-50%, -50%) translateZ(46px);
}
.area:nth-child(182) .building::before {
  width: 46px;
}
.area:nth-child(182) .building::after {
  height: 46px;
}
.area:nth-child(183) {
  top: 23%;
  left: 99%;
  width: 135px;
  height: 68px;
  -webkit-animation-delay: -1761ms;
  animation-delay: -1761ms;
}
.area:nth-child(183) .building {
  transform: translate(-50%, -50%) translateZ(117px);
}
.area:nth-child(183) .building::before {
  width: 117px;
}
.area:nth-child(183) .building::after {
  height: 117px;
}
.area:nth-child(184) {
  top: 52%;
  left: 76%;
  width: 133px;
  height: 38px;
  -webkit-animation-delay: -38379ms;
  animation-delay: -38379ms;
}
.area:nth-child(184) .building {
  transform: translate(-50%, -50%) translateZ(350px);
}
.area:nth-child(184) .building::before {
  width: 350px;
}
.area:nth-child(184) .building::after {
  height: 350px;
}
.area:nth-child(185) {
  top: 80%;
  left: 3%;
  width: 113px;
  height: 152px;
  -webkit-animation-delay: -5964ms;
  animation-delay: -5964ms;
}
.area:nth-child(185) .building {
  transform: translate(-50%, -50%) translateZ(364px);
}
.area:nth-child(185) .building::before {
  width: 364px;
}
.area:nth-child(185) .building::after {
  height: 364px;
}
.area:nth-child(186) {
  top: 50%;
  left: 64%;
  width: 107px;
  height: 59px;
  -webkit-animation-delay: -422ms;
  animation-delay: -422ms;
}
.area:nth-child(186) .building {
  transform: translate(-50%, -50%) translateZ(290px);
}
.area:nth-child(186) .building::before {
  width: 290px;
}
.area:nth-child(186) .building::after {
  height: 290px;
}
.area:nth-child(187) {
  top: 34%;
  left: 75%;
  width: 171px;
  height: 114px;
  -webkit-animation-delay: -25288ms;
  animation-delay: -25288ms;
}
.area:nth-child(187) .building {
  transform: translate(-50%, -50%) translateZ(75px);
}
.area:nth-child(187) .building::before {
  width: 75px;
}
.area:nth-child(187) .building::after {
  height: 75px;
}
.area:nth-child(188) {
  top: 57%;
  left: 17%;
  width: 67px;
  height: 157px;
  -webkit-animation-delay: -39681ms;
  animation-delay: -39681ms;
}
.area:nth-child(188) .building {
  transform: translate(-50%, -50%) translateZ(340px);
}
.area:nth-child(188) .building::before {
  width: 340px;
}
.area:nth-child(188) .building::after {
  height: 340px;
}
.area:nth-child(189) {
  top: 12%;
  left: 69%;
  width: 150px;
  height: 172px;
  -webkit-animation-delay: -4839ms;
  animation-delay: -4839ms;
}
.area:nth-child(189) .building {
  transform: translate(-50%, -50%) translateZ(113px);
}
.area:nth-child(189) .building::before {
  width: 113px;
}
.area:nth-child(189) .building::after {
  height: 113px;
}
.area:nth-child(190) {
  top: 30%;
  left: 13%;
  width: 165px;
  height: 146px;
  -webkit-animation-delay: -2727ms;
  animation-delay: -2727ms;
}
.area:nth-child(190) .building {
  transform: translate(-50%, -50%) translateZ(360px);
}
.area:nth-child(190) .building::before {
  width: 360px;
}
.area:nth-child(190) .building::after {
  height: 360px;
}
.area:nth-child(191) {
  top: 96%;
  left: -15%;
  width: 135px;
  height: 53px;
  -webkit-animation-delay: -27490ms;
  animation-delay: -27490ms;
}
.area:nth-child(191) .building {
  transform: translate(-50%, -50%) translateZ(100px);
}
.area:nth-child(191) .building::before {
  width: 100px;
}
.area:nth-child(191) .building::after {
  height: 100px;
}
.area:nth-child(192) {
  top: 77%;
  left: 72%;
  width: 102px;
  height: 145px;
  -webkit-animation-delay: -11618ms;
  animation-delay: -11618ms;
}
.area:nth-child(192) .building {
  transform: translate(-50%, -50%) translateZ(250px);
}
.area:nth-child(192) .building::before {
  width: 250px;
}
.area:nth-child(192) .building::after {
  height: 250px;
}
.area:nth-child(193) {
  top: 14%;
  left: 46%;
  width: 142px;
  height: 45px;
  -webkit-animation-delay: -29767ms;
  animation-delay: -29767ms;
}
.area:nth-child(193) .building {
  transform: translate(-50%, -50%) translateZ(34px);
}
.area:nth-child(193) .building::before {
  width: 34px;
}
.area:nth-child(193) .building::after {
  height: 34px;
}
.area:nth-child(194) {
  top: 5%;
  left: -17%;
  width: 44px;
  height: 119px;
  -webkit-animation-delay: -37754ms;
  animation-delay: -37754ms;
}
.area:nth-child(194) .building {
  transform: translate(-50%, -50%) translateZ(50px);
}
.area:nth-child(194) .building::before {
  width: 50px;
}
.area:nth-child(194) .building::after {
  height: 50px;
}
.area:nth-child(195) {
  top: 75%;
  left: -7%;
  width: 77px;
  height: 36px;
  -webkit-animation-delay: -8485ms;
  animation-delay: -8485ms;
}
.area:nth-child(195) .building {
  transform: translate(-50%, -50%) translateZ(78px);
}
.area:nth-child(195) .building::before {
  width: 78px;
}
.area:nth-child(195) .building::after {
  height: 78px;
}
.area:nth-child(196) {
  top: 53%;
  left: 40%;
  width: 109px;
  height: 99px;
  -webkit-animation-delay: -27861ms;
  animation-delay: -27861ms;
}
.area:nth-child(196) .building {
  transform: translate(-50%, -50%) translateZ(193px);
}
.area:nth-child(196) .building::before {
  width: 193px;
}
.area:nth-child(196) .building::after {
  height: 193px;
}
.area:nth-child(197) {
  top: 28%;
  left: -16%;
  width: 76px;
  height: 179px;
  -webkit-animation-delay: -34103ms;
  animation-delay: -34103ms;
}
.area:nth-child(197) .building {
  transform: translate(-50%, -50%) translateZ(140px);
}
.area:nth-child(197) .building::before {
  width: 140px;
}
.area:nth-child(197) .building::after {
  height: 140px;
}
.area:nth-child(198) {
  top: 86%;
  left: 60%;
  width: 177px;
  height: 122px;
  -webkit-animation-delay: -15355ms;
  animation-delay: -15355ms;
}
.area:nth-child(198) .building {
  transform: translate(-50%, -50%) translateZ(416px);
}
.area:nth-child(198) .building::before {
  width: 416px;
}
.area:nth-child(198) .building::after {
  height: 416px;
}
.area:nth-child(199) {
  top: 69%;
  left: 85%;
  width: 54px;
  height: 140px;
  -webkit-animation-delay: -24159ms;
  animation-delay: -24159ms;
}
.area:nth-child(199) .building {
  transform: translate(-50%, -50%) translateZ(54px);
}
.area:nth-child(199) .building::before {
  width: 54px;
}
.area:nth-child(199) .building::after {
  height: 54px;
}
.area:nth-child(200) {
  top: 100%;
  left: 89%;
  width: 127px;
  height: 62px;
  -webkit-animation-delay: -35131ms;
  animation-delay: -35131ms;
}
.area:nth-child(200) .building {
  transform: translate(-50%, -50%) translateZ(379px);
}
.area:nth-child(200) .building::before {
  width: 379px;
}
.area:nth-child(200) .building::after {
  height: 379px;
}

@-webkit-keyframes slide {
  0% {
    transform: translateY(-200vh);
  }
  100% {
    transform: translateY(200vh);
  }
}

@keyframes slide {
  0% {
    transform: translateY(-200vh);
  }
  100% {
    transform: translateY(200vh);
  }
}
</style>

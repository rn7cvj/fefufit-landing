<script setup lang="ts">

import Features from "./components/Features.vue";
import MainButton from "./components/MainButton.vue";
import ImageCarousel from "./components/ImageCarousel.vue";

</script>

<template>

  <div class="main-container">

    <div style="width: 10%; height: 100vh"/>
    <Features :features='["информация о тренерах, корпусах и услугах" ,"информация о тренерах, корпусах и услугах" , "запись на занятия" , "покупка абонементов"]'></Features>

    <div style="width: 10%; height: 100vh"/>
    <MainButton
      subtitle-first-line="cамое время"
      subtitle-second-line="заняться спортом"
      download-button-title="Скачать Android-приложение"
      web-version-button-title="Использовать веб-версию"
    />

    <div style="width: 10%; height: 100vh"/>

    <ImageCarousel :top-padding=20 :images="['/app_mock_1.jpeg' , '/app_mock_2.jpeg' ]"/>

    <div style="width: 5%; height: 100vh"/>
    <ImageCarousel :images="['/app_mock_3.jpeg' , '/app_mock_4.jpeg' ]"/>

  </div>

</template>

<style scoped>

.main-container{
  display: flex;
  flex-direction: row;
}

</style>

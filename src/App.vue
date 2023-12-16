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
      subtitle="Самое время заняться спортом"
      download-button-title="Скачать Android-приложение"
      web-version-button-title="Использовать веб-версию"
    />

    <div style="width: 10%; height: 100vh"/>

    <ImageCarousel :images="['/app_mock_1.png' , '/app_mock_2.png' ]"/>
    <ImageCarousel :images="['/app_mock_3.png' , '/app_mock_4.png' ]"/>

  </div>

</template>

<style scoped>

.main-container{
  display: flex;
  flex-direction: row;
}

</style>

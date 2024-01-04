<script setup lang="ts">

import Features from "./components/Features.vue";
import MainButton from "./components/MainButton.vue";
import ImageCarousel from "./components/ImageCarousel.vue";

</script>

<template>

  <div class="main-container">


    <Features
        class = "features"
        :features='["информация о тренерах, корпусах и услугах" ,"информация о тренерах, корпусах и услугах" , "запись на занятия" , "покупка абонементов"]'/>

    <MainButton
      class = "main-button"
      subtitle-first-line="cамое время"
      subtitle-second-line="заняться спортом"
      download-button-title="Скачать Android-приложение"
      web-version-button-title="Использовать веб-версию"
    />


    <ImageCarousel
      class="image-carousel-primary"
      :images="['/app_mock_1.jpeg' , '/app_mock_2.jpeg' ]"
    />

    <ImageCarousel
      class="image-carousel-secondary"
      :images="['/app_mock_3.jpeg' , '/app_mock_4.jpeg' ]"
    />

  </div>

</template>

<style scoped>

.main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

@media screen and (max-width: 1100px){
    .image-carousel-secondary{
      display: none !important;
    }
}

@media screen and (max-width: 700px){
  .image-carousel-primary{
    display: none !important;
  }
}

@media screen and (max-width: 500px){
  .features{
    display: none !important;
  }
}


</style>

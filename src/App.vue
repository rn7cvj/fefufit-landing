<script setup lang="ts">

import Features from "./components/Features.vue";
import MainButton from "./components/MainButton.vue";
import ImageCarousel from "./components/ImageCarousel.vue";


const publicPath : string = import.meta.env.VITE_BASE_URL

console.log(`VITE_BASE_URL: ${publicPath}`)


let appMocks = [
    publicPath + `app_mock_1.jpeg`  ,
    publicPath + `app_mock_2.jpeg`  ,
    publicPath + `app_mock_3.jpeg`  ,
    publicPath + `app_mock_4.jpeg`  ,
  ];

let logoPath = publicPath + "logo.svg";


</script>

<template>


  <div class="main-container">


    <Features
        class = "features"
        :features='[$t("feature.info"),$t("feature.booking") , $t("feature.purchase")]'/>

    <MainButton
      class = "main-button"
      :logo-path=logoPath
    />


    <ImageCarousel
      class="image-carousel-primary"
      :images= appMocks.slice(0,2)
    />

    <ImageCarousel
      class="image-carousel-secondary"
      :images=appMocks.slice(2,4)
    />

  </div>

</template>

<style scoped>

.main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  height: 100dvh;
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

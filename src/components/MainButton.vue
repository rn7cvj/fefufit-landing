<script setup lang="ts">

defineProps({
  subtitle : String,
  downloadButtonTitle : String ,
  webVersionButtonTitle : String,
});

</script>

<template>

  <div  class="main-button-container">

    <div class="subtitle">{{subtitle}}</div>

    <div style="height: 30px"/>
    <img  alt="" src="/logo.svg" class="logo"/>

    <div style="height: 90px"/>
    <a href="#" class="download-button">{{downloadButtonTitle}}</a>

    <div style="height: 30px"/>
    <a href="#" class="web-version-button">{{webVersionButtonTitle}}</a>
  </div>

</template>

<style scoped>

.main-button-container{
  height: 100vh; width: 330px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.subtitle{


  font-size: 51px;

  color: #FFFFFF;
}


.download-button{

  text-decoration: none;

  width: 300px;
  font-size: 20px;

  color: #4343F4;
  padding: 10px;

  background-color: #FFFFFF;

  border-radius: 12px;
  border: 1px solid #FFFFFF;



}

.web-version-button{

  text-decoration: none;

  width: 300px;
  font-size: 20px;

  color: #FFFFFF;
  padding: 10px;

  border-radius: 12px;
  border: 1px solid #FFFFFF;
}

</style>
<script setup lang="ts">




defineProps({
  logoPath : String ,
});



</script>

<template>

  <div  class="main-button-container">

    <div class="subtitle first-line">{{$t("title.first")}}</div>
    <div class="subtitle second-line">{{$t("title.second")}}</div>

    <div style="height: 30px"/>
    <img alt="" :src=logoPath class="logo"/>

    <div style="height: 90px"/>
    <a href="https://apps.rustore.ru/app/ru.fefufit" class="download-button">{{$t("button.download")}}</a>

    <div style="height: 30px"/>
    <a href="https://fefufit.ru/web/" class="web-version-button">{{$t("button.useWeb")}}</a>
  </div>

</template>

<style scoped>

.logo{
  height: 30%;

}

.main-button-container{

  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
  "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
  "Source Han Sans CN", sans-serif;


  height: 100dvh;
  width: 330px;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.subtitle{



  font-weight: 300;
  color: #FFFFFF;

}

.first-line{
  font-size: 51px;
}

.second-line{
  font-size: 37px;
}

.download-button{

  text-decoration: none;

  width: 300px;
  font-size: 20px;

  font-weight: 400;

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

  font-weight: 300;

  border-radius: 12px;
  border: 1px solid #FFFFFF;
}

</style>

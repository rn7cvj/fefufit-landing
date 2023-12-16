<script setup lang="ts">
defineProps(
    {
      features : Array<string>,
    }
);


</script>

<template>

  <div class="features-list-border">
    <div class="features-list">
       <p class="features-item" v-for="feature in features">{{feature}}</p>
    </div>
  </div>

</template>

<style scoped>

.features-list-border{
  border-left: solid;
  border-right: solid;

  border-color: #FFFFFF;
  border-width: 1px;

  width: 85px;
}

.features-list{

  overflow-x: hidden;
  overflow-y: scroll;

  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
  "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
  "Source Han Sans CN", sans-serif;



  height: 100vh;
}

.features-list::-webkit-scrollbar {
  display: none;
}


.features-item{
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  font-size: 24px;
  font-weight: 200;
  color: #FFFFFF;
}


</style>
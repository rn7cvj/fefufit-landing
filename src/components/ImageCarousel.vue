<script setup lang="ts">

import Image from 'primevue/image';

defineProps({
  images: Array<string>,
});

</script>

<template>

  <div class="main-container">

    <div v-for="image in images" class="image">
     <Image  :src=image alt="Image" width="250"  />
    </div>

  </div>

</template>

<style scoped>

.image{
  margin-bottom: 20px;
  margin-top: 20px;


  overflow: clip;
  border-radius: 27px;

}


.main-container {


  width: 250px;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;



  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-items: start;


}

.main-container::-webkit-scrollbar {
  display: none;
}

</style>
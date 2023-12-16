<script setup lang="ts">

import Image from 'primevue/image';

defineProps({
  images: Array<string>,
});

</script>

<template>

  <div class="main-container">

    <Image src=images[0] alt="Image" width="250"/>
    <Image src=images[1] alt="Image" width="250"/>

  </div>

</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
}

</style>
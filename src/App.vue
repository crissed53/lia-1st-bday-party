<template>
  <div class="w-screen flex flex-col items-center">
    <div class="min-w-96 w-full color-set1 text-center">
      <FrontPage />
    </div>
    <!-- <div class="w-96 color-set2">
      <Schedule />
    </div> -->
    <div class="min-w-96 w-full color-set2">
      <Location />
    </div>
  </div>
</template>

<script setup>
import FrontPage from "./components/FrontPage.vue"
import Location from "./components/Location.vue"
</script>

<style scoped>
.color-set2 {
  @apply bg-set1-0 text-set1-2;
}
.color-set1 {
  @apply bg-set1-3 text-set1-1;
}
</style>

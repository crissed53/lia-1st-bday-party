<template>
  <div class="text-center my-4">
    <p class="text-xl">찾아오시는길</p>
    <p class="text-sm text-center mx-16 text-pretty my-4">
      경기 수원시 영통구 광교호수공원로 80 
      <p>앨리웨이 어라운드라이프 3층</p>
    </p>
    <p>031-547-9870</p>
    <div
      id="appMaps"
      class="flex gap-4 mt-4 justify-center items-center mb-8"
    >
      <img
        v-for="(imgPath, key) in logoImagePaths"
        :src="imgPath"
        class="h-12 w-12 cursor-pointer rounded-2xl"
        @click="redirectToNewTab(key)"
      />
    </div>
  </div>
</template>

<script setup>
import { useLocationStore } from "@/stores/global"
const { logoImagePaths, redirectToNewTab } = useLocationStore()
</script>

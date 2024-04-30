<template>
  <div class="relative">
    <div class="absolute inset-x-0 top-8 flex flex-col gap-y-3">
      <p class="text-xl">
        <span class="text-2xl">리아</span>의 첫번째 생일 파티에 초대합니다.
      </p>
      <p class="text-lg">2024년 5월 4일 (토) 12시</p>
      <p class="text-md">세상의 모든 아침 광교점</p>
      <slot />
    </div>
    <img
      class="w-96 h-[28rem] object-cover object-bottom"
      src="@/assets/photos/lia1.jpeg"
    />
  </div>
</template>

<script setup></script>

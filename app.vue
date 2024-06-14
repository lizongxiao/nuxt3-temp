<script setup lang="ts">
useSeoMeta({
  title: "Chiffon Blog",
  description: "一个只想学习的前端博客",
});
</script>

<template>
  <NuxtLayout>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/video">视频页</nuxt-link>
  </NuxtLayout>

  <NuxtPage />
</template>

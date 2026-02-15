<template>
  <div>
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { loadConfig } = useConfig()

// Load all configuration on app mount
onMounted(async () => {
  await loadConfig()
})
</script>

<style>
/* Global styles are in assets/css/main.css */
</style>

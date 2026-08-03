<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
// drop your file in public/images/bg/ and update the name here
const bgImage = `${baseUrl}images/bg/cardan.jpg`
</script>

<template>
  <div class="app-background" aria-hidden="true">
    <div class="app-background__media" :style="{ backgroundImage: `url(${bgImage})` }" />
    <div class="app-background__scrim" />
  </div>
</template>

<style scoped>
.app-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.app-background__media {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(var(--bg-blur, 8px));
}

.app-background__scrim {
  position: absolute;
  inset: 0;
  background: var(--bg-scrim, color-mix(in srgb, var(--bg) 78%, transparent));
}
</style>

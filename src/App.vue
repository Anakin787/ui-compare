<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="container mx-auto mt-1 mb-2 p-2 rounded-box bg-base-200">
    <ul class="flex gap-4 px-2">
      <li class="btn btn-ghost"><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
      <li class="btn btn-ghost"><RouterLink :to="{ name: 'radix' }">Radix-Vue</RouterLink></li>
      <li class="btn btn-ghost"><RouterLink :to="{ name: 'daisy' }">Daisy UI</RouterLink></li>
    </ul>
  </nav>
  <main class="container mx-auto border-2 rounded-box p-2">
    <RouterView />
  </main>
</template>

<style scoped></style>

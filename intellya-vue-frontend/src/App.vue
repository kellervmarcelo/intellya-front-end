<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBase from './components/HeaderBase.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen font-OpenSans">
    <HeaderBase />

    <RouterView />
  </div>
</template>

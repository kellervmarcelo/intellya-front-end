<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBase from './components/HeaderBase.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen font-OpenSans">
    <HeaderBase />

    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
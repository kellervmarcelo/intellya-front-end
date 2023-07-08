<template>
  <header class="border-b border-gray-500 border-opacity-10 shadow-sm">
    <div class="container gap-5 flex flex-col md:flex-row justify-between">
      <nav class="flex flex-col md:flex-row flex-1 py-4 gap-8 md:items-center">
        <RouterLink :to="{ name: 'home' }">
          <img src="../assets/logo.png" alt="Intellya Logo" class="w-40">
        </RouterLink>
        <div>
          <RouterLink :to="{ name: 'home' }" class="font-semibold border-b-2 border-intellya-primary h-full py-6">
            Usuários {{ query }}
          </RouterLink>
        </div>
      </nav>

      <form class="flex items-center w-full max-w-md">
        <div class="flex items-center gap-3 mb-6 md:mb-0 py-1.5 px-4 bg-white w-full border border-gray-500 border-opacity-10 rounded-md focus-within:ring-2 focus-within:ring-intellya-primary relative">
          <font-awesome-icon class="text-gray-400 pointer-events-none absolute" icon="magnifying-glass" />
          <input type="text" placeholder="Buscar" class="w-full outline-none ml-8" v-model="query">
        </div>
      </form>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const query = ref('');
</script>

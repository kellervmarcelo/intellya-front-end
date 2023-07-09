<template>
  <main class="container mt-11">
    <h1 class="text-3xl font-semibold mb-3">Usuário nº{{ route.params.id }}</h1>
    <p class="mb-5">Visualize as informações do usuario abaixo.</p>

    <Suspense>
      <AsyncUserInfo :user-id="user_id"/>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import AsyncUserInfo from '../components/AsyncUserInfo.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const user_id = route.params.id as string

</script>

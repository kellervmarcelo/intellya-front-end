<template>
  <main class="container mt-11">
    <h1 class="text-3xl font-semibold mb-3">Listagem de Usuários</h1>
    <p class="mb-5">Visualize os usuários que acessam sua plataforma</p>

    <Suspense>
      <AsyncUsersTable />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import AsyncUsersTable from '../components/AsyncUsersTable.vue'

</script>
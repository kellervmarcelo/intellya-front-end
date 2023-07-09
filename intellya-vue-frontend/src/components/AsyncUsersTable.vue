<template>
  <div class="overflow-x-auto md:rounded-lg">
    <table class="w-full border text-left">
      <thead class="bg-gray-100 border-b">
        <tr>
          <th class="px-6 py-3">ID</th>
          <th class="px-6 py-3">Nome</th>
          <th class="px-6 py-3">E-mail</th>
          <th class="px-6 py-3">Nível de Acesso</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" @click="goToUser(user.id)" :key="user.id" class="border-b cursor-pointer hover:bg-gray-50 hover:bg-opacity-60">
          <td class="font-semibold px-6 py-4">{{ user.id }}</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ user.name }}</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ user.email }}</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ user.role }}</td>
          <td class="capitalize text-intellya-secondary font-semibold px-6 py-4 cursor-pointer hover:text-opacity-50" @click="goToUser(user.id)">
            visualizar
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'


axios.defaults.headers.common = {
  'X-API-Key': '70335667-2408-4011-a994-ea3e7042d96f'
}

const { data } = await axios.get('http://localhost:3000/users')
const router = useRouter()

const goToUser = (id: number) => {
  router.push({
    name: 'user',
    params: {
      id: id
    }
  })
}
</script>

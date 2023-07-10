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
        <tr
          v-for="user in filteredUserList"
          @click="goToUser(user.id)"
          :key="user.id"
          class="border-b cursor-pointer hover:bg-gray-50 hover:bg-opacity-60"
        >
          <td class="font-semibold px-6 py-4">{{ user.id }}</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ user.name }}</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ user.email }}</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ formattedRole(user.role) }}</td>
          <td
            class="capitalize text-intellya-secondary font-semibold px-6 py-4 cursor-pointer hover:text-opacity-50"
            @click="goToUser(user.id)"
          >
            visualizar
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import UsersApi from '../services/UsersApi'
import { computed } from 'vue'
import { useSearchStore } from '@/stores/store';
import User from '@/types/User';

const { data } = await UsersApi.getUsers()
const router = useRouter()
const formattedRole = (role: string) => {
  return role === 'member' ? 'Membro' : 'Admin'
}

const searchStore = useSearchStore();
const searchQuery = computed(() => searchStore.getSearchQuery)

const filteredUserList = computed(() => {
  return data.filter((user: User) => {
    return user.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const goToUser = (id: number) => {
  router.push({
    name: 'user',
    params: {
      id: id
    }
  })
}
</script>

<style scoped>
.list-move {
  transition: all 2s;
}
</style>

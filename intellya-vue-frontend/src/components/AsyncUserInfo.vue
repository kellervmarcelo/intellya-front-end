<template>
  <div class="overflow-x-auto md:rounded-lg">
    <table class="w-full border text-left">
      <tbody>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Nome</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ data.name }}</td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Email</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ data.email }}</td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Nível de acesso</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ formattedRole }}</td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Status</td>
          <td class="text-gray-600 font-medium px-6 py-4">{{ formattedStatus }}</td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Data de cadastro</td>
          <td class="text-gray-600 font-medium px-6 py-4">
            {{ formattedDate }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import UsersApi from '@/services/UsersApi';
import { computed } from 'vue'

const props = defineProps({
  userId: {
    required: true,
    type: String
  }
})

const { data } = await UsersApi.getUser(props.userId)
const formattedStatus = computed(() => {
  return data.active ? 'Ativo' : 'Inativo'
})
const formattedDate = computed(() => {
  return new Intl.DateTimeFormat(['pt-BR'], {
    dateStyle: 'short',
    timeStyle: 'medium'
  })
    .format(new Date(data.created_at))
    .replace(',', ' às ')
})
const formattedRole = computed(() => { 
    return data.role === 'member' ? 'Membro' : 'Admin'
})
</script>

<template>
  <div class="md:rounded-lg">
    <table class="w-full border text-left">
      <tbody>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Nome</td>
          <td class="px-6 py-4 flex justify-start">
            <AnimatedSkeleton class="w-full min-w-[200px]" />
          </td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Email</td>
          <td class="text-gray-600 font-medium px-6 py-4">
            <AnimatedSkeleton class="w-full min-w-[200px]" />
          </td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Nível de acesso</td>
          <td class="text-gray-600 font-medium px-6 py-4">
            <AnimatedSkeleton class="w-full min-w-[200px]" />
          </td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Status</td>
          <td class="text-gray-600 font-medium px-6 py-4">
            <AnimatedSkeleton class="w-full min-w-[200px]" />
          </td>
        </tr>
        <tr class="border-b">
          <td class="font-semibold px-6 py-4">Data de cadastro</td>
          <td class="text-gray-600 font-medium px-6 py-4">
            <AnimatedSkeleton class="w-full min-w-[200px]" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import AnimatedSkeleton from './AnimatedSkeleton.vue'
</script>

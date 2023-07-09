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
          <tr class="border-b cursor-pointer">
            <td class="px-6 py-4">
                <AnimatedSkeleton class="w-full max-w-[50px]"/>
            </td>
            <td class="px-6 py-4">
                <AnimatedSkeleton class="w-full max-w-[200px]"/>
            </td>
            <td class="px-6 py-4">
                <AnimatedSkeleton class="w-full max-w-[200px]"/>
            </td>
            <td class="px-6 py-4">
                <AnimatedSkeleton class="w-full max-w-[200px]"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script setup lang="ts">
import AnimatedSkeleton from './AnimatedSkeleton.vue';
</script>
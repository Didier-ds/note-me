<script setup lang="ts">
import IconSearch from './components/icons/IconSearch.vue';

</script>

<template>
  <div class="flex h-screen">
    <div class="border-r flex justify-center h-full w-32">
        <p class="py-8 font-bold text-lg w-full text-center">NOTE-ME</p>
    </div>
    <div class="w-full">
      <div class="header h-20 px-6 flex items-center">
        <div class="input flex gap-1 p-3">
          <IconSearch />
          <input type="text" placeholder="Search" class="outline-none h-full px-2"/>
        </div>
      </div>
      <div class="p-4">
        <p class="font-bold text-2xl font-main p-4">Notes</p>
        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

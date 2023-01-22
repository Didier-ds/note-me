<script setup lang="ts">
import IconSearch from './components/icons/IconSearch.vue';

</script>

<template>
  <div class="flex h-screen">
    <div class="border-r flex justify-center h-full w-32">
        <p class="py-8 font-extrabold text-lg w-full text-center font-default">NOTE-ME</p>
    </div>
    <div class="w-full">
      <div class="header px-8 py-6 flex items-center">
        <div class="input flex items-center">
          <IconSearch class="text-gray-300 mr-1 w-5 h-5" />
          <input type="text" placeholder="Search" class="outline-none font-default text-xl placeholder:tracking-wide placeholder:text-gray-300 "/>
        </div>
      </div>
      <div class="">
        <p class="font-bold text-4xl font-main px-10 py-8">Notes</p>
        <div class="px-8 grid grid-cols-4 gap-10">
          <div class="p-8 rounded-3xl bg-sky-400 min-h-[18rem] relative" v-for="i in 6" :key="i">
            <p class="font-semibold font-default text-xl ">The beginning of screenless design: UI jobs to be take over by Solution Architect</p>
            <div class="w-16 h-16 bg-black rounded-full absolute bottom-5 right-5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

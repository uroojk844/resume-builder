<template>
  <section class="p-4 grid grid-cols-4 gap-4">
    <NuxtLink
      v-for="(template, index) in ['one', 'two']"
      :key="index"
      :to="'/templates/' + template"
      class="border rounded grid place-items-center text-4xl aspect-square hover:bg-blue-100 transition-colors"
    >
      {{ index + 1 }}
    </NuxtLink>
    <!-- TO-DOs -->
    <!-- Save user details button -->
    <!-- Create new user button to make details blank-->
  </section>
</template>

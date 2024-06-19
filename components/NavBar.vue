<template>
  <nav class="sticky top-0 bg-gray-100 p-4 border-b flex items-center gap-8">
    <div class="text-lg font-semibold mr-auto">Resume Builder</div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/resume">My Resume</NuxtLink>
  </nav>
</template>

<style scoped>
@media print {
  nav {
    display: none;
  }
}

@page{
  margin: 0;
  scale: 0.7;
}
</style>
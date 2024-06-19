<template>
  <nav class="p-4 border-b flex items-center gap-8">
    <div class="text-lg font-semibold mr-auto">Resume Builder</div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/resume">Resume</NuxtLink>
    <NuxtLink to="/templates">Templates</NuxtLink>
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
<template>
  <nav
    class="print:hidden z-50 sticky top-0 bg-gray-100 p-4 border-b text-nowrap flex items-center gap-8"
  >
    <div class="text-lg font-semibold mr-auto flex items-center">
      <label
        class="md:hidden cursor-pointer transition-transform active:scale-95 mt-1.5 mr-2"
      >
        <Icon name="heroicons:bars-3-center-left-16-solid" />
        <input
          type="checkbox"
          class="appearance-none hidden"
          id="sidebarToggle"
        />
      </label>
      Resume Builder
    </div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/resume">My Resume</NuxtLink>
  </nav>
</template>

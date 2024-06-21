<template>
  <main>
    <NavBar />
    <section class="grid md:grid-cols-[310px_auto] print:grid-cols-1 gap-4">
      <section
        id="sidebar"
        class="print:hidden p-4 space-y-4 border-r max-h-[calc(100vh-60px)] overflow-auto"
      >
        <FormProfile />
        <LazyFormLinks />
        <LazyFormSkills />
        <LazyFormLanguages />
        <LazyFormEducation />
        <LazyFormExperience />
      </section>
      <section class="max-h-[calc(100vh-60px)] print:max-h-max overflow-y-auto">
        <NuxtPage />
      </section>
    </section>
  </main>
</template>
<style lang="scss" scoped>
@media print {
  @page {
    margin: 0;
    // size: 29.7cm 23cm;
    // size:A4;
  }
}
main {
  height: 100dvh;
  display: grid;
  grid-template-rows: 60px auto;
}

@media screen and (max-width: 768px) {
  body:has(#sidebarToggle:checked) #sidebar {
    transform: translateX(0);
  }

  #sidebar {
    position: absolute;
    height: 100%;
    background-color: #f5f5f5;
    width: 310px;
    transition: 200ms ease;
    transform: translateX(-100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded cursor-pointer;
}
</style>

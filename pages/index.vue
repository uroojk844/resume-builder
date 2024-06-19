<template>
  <section class="p-4 grid4 gap-4">
    <FormProfile />
    <LazyFormLinks />
    <LazyFormSkills />
    <LazyFormLanguages />
    <LazyFormEducation />
    <LazyFormExperience />
    <NuxtLink to="/resume" class="col-span-full pt-4 border-t border-black">
      <Button class="bg-green-500">Preview resume</Button>
    </NuxtLink>
  </section>
</template>

<script setup>
const details = useDetails();
</script>
<template>
  <section class="p-4 grid grid-cols-4 gap-4">
    <FormProfile />
    <LazyFormLinks />
    <LazyFormSkills />
    <LazyFormLanguages />
    <LazyFormEducation />
    <LazyFormExperience />
  </section>
</template>

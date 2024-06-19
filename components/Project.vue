<script setup>
defineProps(["index"]);
const details = useDetails();
</script>

<template>
  <section class="col-span-full grid grid-cols-4 gap-4">
    <Input
      placeholder="Start date"
      type="date"
      v-model="details.experience[index]['start_date']"
    />
    <Input
      placeholder="End date"
      type="date"
      v-model="details.experience[index]['end_date']"
    />
    <Input placeholder="Title" v-model="details.experience[index]['title']" />
    <Input
      placeholder="Link"
      v-model="details.experience[index]['link']"
      type="url"
    />
    <TextField
      placeholder="Description"
      class="col-span-2"
      v-model="details.experience[index]['description']"
    />
  </section>
</template>

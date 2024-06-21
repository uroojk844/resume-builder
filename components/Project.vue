<script setup>
defineProps(["index"]);
const details = useDetails();
</script>

<template>
  <section class="gap-4 border-b">
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
      v-model="details.experience[index]['description']"
    />
    <Button @click="delete details.experience[index]" class="bg-red-400">Delete</Button>
  </section>
</template>

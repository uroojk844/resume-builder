<script setup>
defineProps(["index"]);
const details = useDetails();
</script>

<template>
  <Input
    placeholder="Start date"
    type="date"
    v-model="details.education[index]['start_date']"
  />
  <Input
    placeholder="End date"
    type="date"
    v-model="details.education[index]['end_date']"
  />
  <Input placeholder="Degree" v-model="details.education[index]['course']" />
  <Input
    placeholder="University"
    v-model="details.education[index]['university']"
  />
  <Button @click="delete details.education[index]" class="bg-red-400">Delete</Button>
</template>

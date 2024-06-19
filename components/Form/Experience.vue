<script setup>
import { ref } from "vue";
const projectCount = ref(0);
const details = useDetails();
function addProject() {
  projectCount.value++;
  details.value.experience[projectCount.value] = {
    start_date: "",
    end_date: "",
    course: "",
    university: "",
  };
}
</script>

<template>
  <h1 class="text-xl font-semibold col-span-full">Experience</h1>
  <Project :key="index" v-for="(_, index) in details.experience" :index="index" />
  <Button @click="addProject">Add more</Button>
</template>

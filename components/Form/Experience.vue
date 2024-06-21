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
  <details>
    <summary class="text-xl font-semibold col-span-full">Experience</summary>
    <Project
      :key="index"
      v-for="(_, index) in details.experience"
      :index="index"
    />
    <hr><br>
    <Button @click="addProject">Add more</Button>
  </details>
</template>

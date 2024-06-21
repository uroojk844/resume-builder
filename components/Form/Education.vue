<script setup>
import { ref } from "vue";
const courseCount = ref(0);
const details = useDetails();
function addCourse() {
  courseCount.value++;
  details.value.education[courseCount.value] = {
    start_date: "",
    end_date: "",
    course: "",
    university: "",
  };
}
</script>

<template>
  <details>
    <summary class="text-xl font-semibold col-span-full">Education</summary>
    <Course
      :key="index"
      v-for="(_, index) in details.education"
      :index="index"
    />
    <hr><br>
    <Button @click="addCourse">Add more</Button>
  </details>
</template>

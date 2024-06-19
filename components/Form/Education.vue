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
  <h1 class="text-xl font-semibold col-span-full">Education</h1>
  <Course :key="index" v-for="(_, index) in details.education" :index="index" />
  <Button @click="addCourse">Add more</Button>
</template>

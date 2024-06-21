<script setup>
import { ref } from "vue";
const details = useDetails();
const newSkill = ref("");
const skills = ref(details.value.skills);

function addSkill(event) {
  skills.value.push(newSkill.value);
  details.value.skills = skills.value;
  newSkill.value = "";
}

function deleteSkill(index) {
  skills.value.splice(index, 1);
}
</script>
<template>
  <details>
    <summary class="text-xl font-semibold col-span-full">Skills</summary>
    <div v-if="skills.length" class="col-span-full flex flex-wrap items-center">
      <Chip
        :key="index"
        v-for="(skill, index) in skills"
        :onClick="deleteSkill"
        :index="index"
        >{{ skill }}</Chip
      >
    </div>
    <form
      @submit.prevent="addSkill"
      class="col-span-full items-center gap-4 flex w-full"
    >
      <Input placeholder="Skill" v-model="newSkill" :labels="false" required />
      <Button @click="adding = true">Add</Button>
    </form>
  </details>
</template>

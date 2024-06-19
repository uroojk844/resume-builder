<script setup>
import { ref } from "vue";
const details = useDetails();
const newSkill = ref("");
const skills = ref(details.value.skills);

function addSkill(event) {
  skills.value.push(newSkill.value);
  details.value.skills = skills.value;
  event.target.reset();
}

function deleteSkill(index) {
  skills.value.splice(index, 1);
}
</script>
<template>
  <h1 class="text-xl font-semibold col-span-full">Skills</h1>
  <div v-if="skills.length" class="col-span-full flex flex-wrap items-center gap-4">
    <div
      class="border border-black text-sm px-3 py-1 rounded-full"
      
      v-for="(skill, index) in skills"
      :key="index"
    >
      {{ skill }}
      <span
        @click="() => deleteSkill(index)"
        class="ml-1 text-red-400 cursor-pointer"
        >&times;</span
      >
    </div>
  </div>
  <form
    @submit.prevent="addSkill"
    class="col-span-full items-center gap-4 flex w-full"
  >
    <Input placeholder="Skill" v-model="newSkill" required />
    <Button @click="adding = true">Add</Button>
  </form>
</template>

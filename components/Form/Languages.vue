<script setup>
import { ref } from "vue";
const details = useDetails();
const newLang = ref("");
const langs = ref(details.value.languages);

function addLang(event) {
  langs.value.push(newLang.value);
  details.value.languages = langs.value;
  newLang.value = "";
}

function deleteLang(index) {
  langs.value.splice(index, 1);
}
</script>
<template>
  <details>
    <summary class="text-xl font-semibold col-span-full">Languages</summary>
    <div v-if="langs.length" class="col-span-full flex items-center">
      <Chip
        v-for="(lang, index) in langs"
        :key="index"
        :index="index"
        :onClick="deleteLang"
        >{{ lang }}</Chip
      >
    </div>
    <form
      @submit.prevent="addLang"
      class="col-span-full items-center gap-4 flex w-full"
    >
      <Input
        :labels="false"
        placeholder="Languages"
        v-model="newLang"
        required
      />
      <Button @click="adding = true">Add</Button>
    </form>
  </details>
</template>

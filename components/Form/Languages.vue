<script setup>
import { ref } from "vue";
const details = useDetails();
const newLang = ref("");
const langs = ref(details.value.languages);

function addLang(event) {
  langs.value.push(newLang.value);
  details.value.languages = langs.value;
  event.target.reset();
}

function deleteLang(index) {
  langs.value.splice(index, 1);
}
</script>
<template>
  <h1 class="text-xl font-semibold col-span-full">Languages</h1>
  <div v-if="langs.length" class="col-span-full flex items-center gap-4">
    <div
      class="border border-black text-sm px-3 py-1 rounded-full"
      v-for="(lang, index) in langs"
      :key="index"
    >
      {{ lang }}
      <span
        @click="() => deleteLang(index)"
        class="ml-1 text-red-400 cursor-pointer"
        >&times;</span
      >
    </div>
  </div>
  <form
    @submit.prevent="addLang"
    class="col-span-full items-center gap-4 flex w-full"
  >
    <Input placeholder="Languages" v-model="newLang" required />
    <Button @click="adding = true">Add</Button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const details = useDetails();
const newLink = ref("");
const adding = ref(false);
const links = ref(["github", "linkedin", "portfolio"]);

function addLink() {
  links.value.push(newLink.value);
  adding.value = false;
}
</script>
<template>
  <h1 class="text-xl font-semibold col-span-full">Useful Links</h1>
  <Input
    v-for="(link, index) in links"
    :key="index"
    :placeholder="link.capitalize()"
    type="url"
    v-model="details.links[link]"
  />
  <Button @click="adding = true">Add more</Button>

  <section
    v-if="adding"
    @click="adding = false"
    class="fixed inset-0 grid place-items-center backdrop-blur-sm"
  >
    <form
      @submit.prevent="addLink"
      @click="$event.stopPropagation()"
      class="max-w-xs w-full bg-white rounded shadow-sm"
    >
      <div class="px-3 py-2 font-semibold border-b">Create link</div>
      <div class="p-4 grid gap-4">
        <Input placeholder="Link for" v-model="newLink" required />
        <Button>Create</Button>
      </div>
    </form>
  </section>
</template>

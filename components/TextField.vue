<script setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  type: {
    default: "text",
  },
  rows: {
    default: 5,
  },
});
let id;
onMounted(() => {
  id = Math.floor(Math.random() * 100000);
});
</script>
<template>
  <section class="grid gap-1 my-4">
    <label :for="'textfield' + id">{{ $props.placeholder }}</label>
    <textarea
      :rows="props.rows"
      :type="props.type"
      :placeholder="props.placeholder"
      :id="'textfield' + id"
      class="border border-black bg-transparent rounded px-3 py-2 outline-none"
      @keyup="$emit('update:modelValue', $event.target.value)"
    >{{ modelValue }}</textarea>
  </section>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  modelValue: {
    type: String,
  },
  labels: {
    default: true,
  },
  placeholder: {
    type: String,
  },
  type: {
    default: "text",
  },
});

let id;
onMounted(() => {
  id = Math.floor(Math.random() * 100000);
});
</script>
<template>
  <section class="grid gap-1 my-4">
    <label v-if="labels" :for="'input' + id">{{ $props.placeholder }}</label>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :id="'input' + id"
      class="border border-black bg-transparent rounded px-3 py-2 outline-none"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </section>
</template>

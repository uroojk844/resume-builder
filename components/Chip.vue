<script setup>
defineProps(["onClick", "index"]);
</script>

<template>
  <div class="border border-black text-sm px-3 py-1 rounded-full m-2">
    <slot />
    <span
      @click="() => $props.onClick($props.index)"
      class="ml-1 text-red-400 cursor-pointer"
      >&times;</span
    >
  </div>
</template>

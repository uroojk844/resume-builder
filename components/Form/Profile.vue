<script setup>
const details = useDetails();
</script>
<template>
  <details>
    <summary class="text-xl font-semibold">Profile details</summary>
    <Input placeholder="Full name" v-model="details.name" />
    <Input placeholder="Role" v-model="details.role" />
    <Input placeholder="Email" type="email" v-model="details.email" />
    <Input placeholder="Phone" type="tel" v-model="details.tel" />
    <TextField placeholder="Address" v-model="details.address" />
    <TextField
      placeholder="Summary"
      class="sm:col-span-2"
      v-model="details.summary"
    />
  </details>
</template>

<script setup lang="ts">
const { data, error } = useFetch('/api/my-data');
</script>
<template>
  <div>
    {{ data }}
  </div>
  <div>
    {{  error }}
  </div>
</template>

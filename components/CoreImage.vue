<template>
    <img :src="block?.attributes?.src" :alt="block?.attributes?.alt">
</template>

<script setup>
const props = defineProps({
    block: Object
})

</script>
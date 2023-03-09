<template>
    <Block v-for="block in blocks" :key="block.clientId" :block="block"></Block>
    </template>
    
    <script setup>
    const props = defineProps({
        blocks: Array
    });
    </script>
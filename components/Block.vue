<template>
    <CoreParagraph v-if="block.name === 'core/paragraph'" :block="block"></CoreParagraph>
    <CoreImage v-if="block.name === 'core/image'" :block="block"></CoreImage>
    </template>
    
    <script setup>
    const props = defineProps({
        block: Object
    })
    
    
    </script>
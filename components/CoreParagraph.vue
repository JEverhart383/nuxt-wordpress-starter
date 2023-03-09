<template>
    <p v-html="block.attributes.content"></p>
   </template>
   
   <style >
   
   a {
       color: blue;
       text-decoration: underline;
   }
   
   </style>
   
   <script setup>
   const props = defineProps({
       block: Object
   })
   
   </script>
<template>
  	<h1>Quoto Detail </h1>
  	<div>{{ detail }}</div>
</template>
<script>
    export default {
        props:{
          id:{
            type: Number,
            required: true,
          },
          detail:{
            type: Object,
            required: true,
          }
        }
    }
</script>
<template>
  <button @click="increment">Add 2</button>
</template>

<script>
  export default {
    methods: {
      increment() {
        this.$store.dispatch('increment')
      }
    }
  }
</script>

<template>
  <button @click="inc">increment</button>
  <button @click="inc10({value: 10})">increase</button>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    methods: {
      // increment() {
      //   this.$store.dispatch('increment')
      // }
      // ...mapActions(['increment', 'increase'])
      ...mapActions('numbers', {
        inc: 'increment',
        inc10: 'increase'
      })
    }
  }
</script>

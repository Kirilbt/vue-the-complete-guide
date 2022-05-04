<script >
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      }
    },
  }
</script>

<template>
  <li class="card">
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
  </li>
</template>

<style >
  .card {
    background: #eee;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>

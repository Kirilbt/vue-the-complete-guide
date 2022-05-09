<script>
  export default {
    data() {
      return {
        storedResources: [
          {
            id: 'official-guide',
            title: 'Official Guide',
            description: 'The official Vue.js documentation.',
            link: 'http://vuejs.com'
          },
          {
            id: 'google',
            title: 'Google',
            description: 'Learn to google.',
            link: 'http://google.com'
          },
        ]
      }
    }
  }
</script>

<template>
  <ul v-for="resources in storedResources">
    <li>
      <h2> {{ resources.title }} </h2>
    </li>
  </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

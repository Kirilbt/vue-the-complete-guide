<template>
  <the-header title="RememberMe"></the-header>
</template>

<script>
  import TheHeader from "./components/layouts/TheHeader.vue"

  export default {
    components: {
      TheHeader
    },
    data() {
      return {
        storedResources: [
          {
            id: 'official-guide',
            title: 'Official Guide',
            description: 'The official Vue.js documentation.',
            link: 'http://vuejs.org'
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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }
</style>

<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
  import LearningResource from "./components/learning-resources/LearningResource.vue"

  export default {
    components: {
      LearningResource
    },
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

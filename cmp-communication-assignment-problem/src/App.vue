<script>
  export default {
    data() {
      return {
        users: [
          {
            id: 'kiril',
            username: 'Kiril',
            age: 31
          },
          {
            id: 'daphne',
            username: 'Daphne',
            age: 26
          },
        ]
      }
    },
    methods: {
      addUser(username, age) {
        const newUser = {
          id: username,
          username: username,
          age: age,
        }
        this.users.unshift(newUser)
      },
    }
  }
</script>

<template>
  <user-data @add-user="addUser"></user-data>
  <ul>
    <active-user
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :username="user.username"
      :age="user.age"
    ></active-user>
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

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

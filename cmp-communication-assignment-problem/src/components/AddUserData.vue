<script >
  export default {
    emits: ['add-user'],
    data () {
      return {
        enteredUsername: '',
        enteredAge: ''
      }
    },
    methods: {
      submitData() {
        this.$emit('add-user', this.enteredUsername, this.enteredAge)
      }
    }
  }
</script>

<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Username</label>
      <input type="text" v-model="enteredUsername" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="enteredAge" />
    </div>
    <div>
      <button>Add User</button>
    </div>
  </form>
</template>

<style >
  form {
    background: #eee;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>

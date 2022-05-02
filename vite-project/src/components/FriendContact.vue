<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ isVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: [
      'name',
      'phoneNumber',
      'emailAddress'
    ],
    data() {
      return {
        isVisible: false,
        friend: {
            id: 'manuel',
            name: 'Manuel Lorenz',
            phone: '0123 45678 90',
            email: 'manuel@localhost.com'
          },
      }
    },
    methods: {
      toggleDetails() {
        this.isVisible = !this.isVisible
      }
    }
  }
</script>

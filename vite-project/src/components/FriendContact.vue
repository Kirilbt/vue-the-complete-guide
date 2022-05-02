<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ isVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
    data() {
      return {
        isVisible: false,
        friend: {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com'
        },
        friendIsFavorite: this.isFavorite
      }
    },
    methods: {
      toggleDetails() {
        this.isVisible = !this.isVisible
      },
      toggleFavorite() {
        if (this.friendIsFavorite === '1') {
          this.friendIsFavorite = '0'
        } else {
          this.friendIsFavorite = '1'
        }
      }
    }
  }
</script>

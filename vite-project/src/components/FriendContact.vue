<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
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
    props: {
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: '0',
      }
    },
    data() {
      return {
        isVisible: false,
        friendIsFavorite: this.isFavorite
      }
    },
    methods: {
      toggleDetails() {
        this.isVisible = !this.isVisible
      },
      toggleFavorite() {
        this.friendIsFavorite = !this.friendIsFavorite
      }
    }
  }
</script>

<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ isVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
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
    emits: ['toggle-favorite', 'delete-friend'],
    // emits: {
    //   'toggle-favorite': (id) => {
    //     if (id) {
    //       return true
    //     } else {
    //       console.warn('ID is missing!')
    //       return false
    //     }
    //   }
    // }
    data() {
      return {
        isVisible: false,
      }
    },
    methods: {
      toggleDetails() {
        this.isVisible = !this.isVisible
      },
      toggleFavorite() {
        this.$emit('toggle-favorite', this.id)
      },
      deleteFriend() {
        this.$emit('delete-friend', this.id)
      }
    }
  }
</script>

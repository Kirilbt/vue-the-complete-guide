const app = Vue.createApp({
  data() {
    return {
      friends : [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 5432 110',
          email: 'julie@localhost.com'
        },
      ]
    }
  },
})

app.component('friend-contact', {
  template:`
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ isVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="isVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      isVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com'
      },
    }
  },
  methods: {
    toggleDetails() {
      this.isVisible = !this.isVisible
    }
  }
})

app.mount('#app')

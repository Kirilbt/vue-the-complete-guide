const app = Vue.createApp({
  data() {
    return {
      isVisible: false,
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
  methods: {
    toggleDetails() {
      this.isVisible = !this.isVisible
    }
  }
})

app.mount('#app')

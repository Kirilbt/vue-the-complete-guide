const app = Vue.createApp({
  data() {
    return {
      name: 'Kiril',
      age: 31,
      randomNumber: Math.random(),
      imageLink: 'https://images.unsplash.com/photo-1620393470010-fd62b8ab841d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
  },
  methods: {
    randomNumberMethod() {
      const randomNumber2 = Math.random()
      return randomNumber2
    },
    newAge() {
      return this.age + 5
    }
  }
})

app.mount('#assignment')

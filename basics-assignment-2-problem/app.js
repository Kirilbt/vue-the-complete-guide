const app = Vue.createApp ({
  data () {
    return {
      output: 'output',
      confirmedOutput: 'output'
    }
  },
  methods: {
    alert() {
      alert('This alert appears when you click on show alert')
    },
    userOutput(event) {
      this.output = event.target.value
    },
    userConfirmedOutput(event, confirmed) {
      this.confirmedOutput = event.target.value + ' ' + confirmed
    }
  }
})

app.mount('#assignment')

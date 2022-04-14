const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    remove(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num
      }
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName
    },
    confirmedInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Submitted')
    }
  }
});

app.mount('#events');

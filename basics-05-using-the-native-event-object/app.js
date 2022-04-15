const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num;
      }
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');

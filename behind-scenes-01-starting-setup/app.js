const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
    },
  },
});

app.mount('#app');


const app2 = Vue.createApp({
  data() {
    return {
      favoriteSport: 'Football',
    }
  }
})

app2.mount('#app2')

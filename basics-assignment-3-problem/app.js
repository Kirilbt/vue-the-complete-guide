const app = Vue.createApp ({
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    result() {
      if (this.count < 37 && this.count > 0) {
        return 'Not there yet'
      } else if (this.count > 37) {
        return 'Too much!'
      } else if (this.count === 37) {
        return 'Congratulation, you found the right count!'
      } else {
        return 'Find the right count'
      }
    }
  },
  watch: {
    result() {
      const that = this
      setTimeout(() => {
        that.count = 0
      }, 5000);
    }
  },
  methods: {
    add(num) {
      this.count += num
    },
  }
})
app.mount('#assignment')

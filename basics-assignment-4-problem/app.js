const app = Vue.createApp({
  data () {
    return {
      user: '',
      visible: true,
      color: ''
    }
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.user === 'user1',
        user2: this.user === 'user2',
        visible: this.visible,
        hidden: !this.visible
      }
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    }
  }
})

app.mount('#assignment')

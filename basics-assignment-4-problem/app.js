const app = Vue.createApp({
  data () {
    return {
      user: '',
      visible: true,
      color: ''
    }
  },
  computed: {
    paragraphColor() {
      if (this.user === 'user1') {
        console.log('user1');
        return { user1: this.user }
      } else if (this.user === 'user2') {
        console.log('user2');
        return { user2: this.user }
      } else {
        console.log('Not a correct input');
      }
    },
    paragraphVisible() {
      if (this.visible === false) {
        console.log('hidden');
        return 'hidden'
      } else {
        console.log('visible');
        return 'visible'
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

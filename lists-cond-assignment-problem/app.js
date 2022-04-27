const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      visible: true,
      hideBtn: 'Hide'
    };
  },
  computed: {
    btnCaption() {
      return this.visible ? 'Hide' : 'Show'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask)
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    hideTasks() {
      this.visible = !this.visible
    }
  }
});

app.mount('#assignment');

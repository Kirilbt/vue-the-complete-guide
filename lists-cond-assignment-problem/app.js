const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      visible: true,
      hideBtn: 'Hide'
    };
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
      if (this.visible === true) {
        this.hideBtn = 'Hide'
      } else {
        this.hideBtn = 'Show'
      }
    }
  }
});

app.mount('#assignment');

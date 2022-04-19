const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      // myDetails: {name: 'Kiril', age: 31 },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');

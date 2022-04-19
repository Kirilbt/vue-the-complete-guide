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
    }
  }
});

app.mount('#user-goals');

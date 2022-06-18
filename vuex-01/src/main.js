import { createApp } from 'vue'
import { createStore } from "vuex"

import App from './App.vue'

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    addOne(state) {
      state.counter++
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value
    }
  }
})

const app = createApp(App)

app.use(store)

app.mount('#app');

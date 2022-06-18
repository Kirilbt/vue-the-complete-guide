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
    }
  }
})

const app = createApp(App)

app.use(store)

app.mount('#app');

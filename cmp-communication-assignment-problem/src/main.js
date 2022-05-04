import { createApp } from 'vue'
import App from './App.vue'
import ActiveUsers from './components/ActiveUsers.vue'
import AddUserData from './components/AddUserData.vue'

const app = createApp(App)

app.component('active-users', ActiveUsers)
app.component('add-user-data', AddUserData)

app.mount('#app')

// Task 1:
// Add two components to the app:
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
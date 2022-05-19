import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
      ]
    }, // nested route / children
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next()
      }
    },
    // { path: '/teams/:teamId', component: TeamMembers, props: true }, // Standalone route
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // to, from, savedPosition. We use underscore to indicate that we have to take these arguments in order to reach the 3rd one
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('needs auth!');
    next()
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // Sending analytics
  console.log('Global afterEach');
  console.log(to, from);
})

const app = createApp(App)

app.use(router)

app.mount('#app');

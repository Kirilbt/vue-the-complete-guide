export default {
  logIn(context) {
    context.commit('setAuth', {isAuth: true})
  },
  logOut(context) {
    context.commit('setAuth', {isAuth: false})
  }
}

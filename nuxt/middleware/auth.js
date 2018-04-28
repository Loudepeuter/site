export default async function ({ app, store }) {
  if(!store.state.user.loggedIn) {
    if(app.$fs.getToken()) {
      let { data } = await app.$fs.auth()
      store.dispatch('initializeAccount', data)
    }
  }
}

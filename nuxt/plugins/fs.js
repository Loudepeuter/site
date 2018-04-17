import Vue from 'vue'
import axios from 'axios'

export default ({ app, store, router }) => {

    const pathMethod = function(path) {
      if(app.i18n.locale == app.i18n.fallbackLocale) return path
      else return '/'+app.i18n.locale+path
    }

    Vue.prototype.$fs = {
      path: (path) => {
        if(app.i18n.locale == app.i18n.fallbackLocale) return path
        else return '/'+app.i18n.locale+path
      },
      user: (user) => {
        return pathMethod('/users/'+user)
      },
      api: {
        data: axios.create({
          baseURL: process.env.FS_DATA,
          timeout: 4500
        })
      }
    }
}
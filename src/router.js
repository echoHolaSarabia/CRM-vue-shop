import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes
})

export default router
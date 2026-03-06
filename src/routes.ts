import home from './views/home.vue'
import error from './views/error.vue'

export default [
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/error',
    name: 'error',
    component: error,
  }
]

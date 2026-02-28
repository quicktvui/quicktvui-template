import home from './views/home.vue'
import error from './views/error.vue'
import cast from './views/cast.vue'

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
  },
  {
    path: '/cast',
    name: 'cast',
    component: cast,
  },
]

import home from './views/home.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('./views/error.vue')
  }
]

export default routes

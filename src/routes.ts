import home from './views/home'
import error from './views/error'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/error',
    name: 'error',
    component: error
  }
]

export default routes

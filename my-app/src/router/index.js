import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'
import Calendar from '../views/Calendar.vue'
import Datatable from '../views/Datatable.vue'
import Register from '@/components/auth/Register.vue'
import Signin from '@/components/auth/Signin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/datatable',
    name: 'datatable',
    component: Datatable
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

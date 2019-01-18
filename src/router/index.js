import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/Register/Register'
import Home from '@/components/views/Home'
import List from '@/components/views/list'
import Find from '@/components/views/find'
import Me from '@/components/views/me'
import Comment from '@/components/views/comment'
import Newpassword from '@/components/views/newpassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{name:'login'}
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/newpassword',
      name: 'Newpassword',
      component:Newpassword
    },
    {
      path:'/',
      component:Home,
      children:[
        {
          path:'/home',
          component:List
        },
        {
          path:'/find',
          component:Find
        },
        {
          path:'/me',
          component:Me
        },
        {
          path:'/home/comment/:id',
          name: 'comment',
          component:Comment
        }

      ]
    }
  ]
})

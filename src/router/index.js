import Vue from 'vue'
import Router from 'vue-router'
const Main = ()=> import('@/components/main')
const Detail = ()=> import('@/components/detail')
const List = ()=> import('@/components/list')
const Mine = ()=>import('@/components/mine')
const Shopping = ()=>import('@/components/shopping')

const Login = ()=>import('@/components/mine/login')
const Register = ()=>import('@/components/mine/register')

//上拉加载，下拉加载
const Pull_down = ()=>import('@/components/pull_down')
const Infinite = ()=>import('@/components/infinite')

//配置全局axios
const Ajax = ()=>import('@/components/ajax')

//配置自定义过滤器
const Filter = ()=>import('@/components/filter')

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/pull_down',
      name: 'pull_down',
      component: Pull_down
    },
    {
      path: '/infinite',
      name: 'infinite',
      component: Infinite
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children: [{
        path: 'login/:id',
        name: 'login',
        component: Login
      },{
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})

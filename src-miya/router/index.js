import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Classify from '@/components/Classify'
import Sign from '@/components/Sign'
import Register from '@/components/Register'
import SecKill from '@/components/SecKill'
import Detail from '@/components/Detail'
import Shopping from '@/components/Shopping'
import List from '@/components/List'
Vue.use(Router)
export default new Router({
  routes: [
     {path: '/',redirect:'/main'},
     {path: '*',redirect:'/main'},
     {path:'/main',name:'main',component:Main},
     {path:'/classify',name:'classify',component:Classify},
     {path:'/shopping',name:'shopping',component:Shopping},
     {path:'/sign',name:'sign',component:Sign},
     {path:'/register',name:'register',component:Register},
     {path:'/seckill/:pid/:sj',name:'seckill',component:SecKill},
     {path:'/detail/:id',name:'detail',component:Detail},
     {path:'/list',name:'list',component:List}
  ]
})

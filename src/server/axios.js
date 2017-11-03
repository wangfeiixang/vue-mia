

import axios from 'axios'

let apiUrl = 'http://192.168.2.72:9090/mock'

axios.intercepotors.request.use(function(config){ // 拦截请求前的状态
    console.log('request init')　　　　 //这里我们可以也添加loading效果
})

axios.intercepotors.response.use(function(response){ // 拦截请求后的状态
   console.log('response')
})

export function myGet(url, params) {
  let _url = apiUrl + url
  return new Promise((resolve, reject) => {
    axios.get(_url, {params}).then(function (response) {
      resolve(response.data)
    })
    .catch(function (err) {
      reject(err)
    })
  })
}
 
export function myPost(url, params) {
  let _url = apiUrl + url
  return new Promise((resolve, reject) => {
    axios.post(_url, {params}).then(function (response) {
      resolve(response.data)
    })
    .catch(function (err) {
      reject(err)
    })
  })
}

import axios from 'axios'
// import nativeToast from 'native-toast'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

//  处理重复请求
let pending = []
// 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let CancelToken = axios.CancelToken
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}

// 请求时拦截器
axios.interceptors.request.use(config => {
  removePending(config)
  config.cancelToken = new CancelToken((c) => {
    // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
    pending.push({ u: config.url + '&' + config.method, f: c })
  })
  // 判断是否存在token，如果存在的话，则每个http header都加上token
  // if (store.state.token) {
  //   config.headers.Authorization = `token ${store.state.token}`;
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// 请求完成后的拦截器
axios.interceptors.response.use(response => {
  // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
  // removePending(response.config)
  return response
}, error => {
  if (error.response === undefined) {
    // nativeToast({
    //   message: '服务器超时，请稍后再试',
    //   position: 'top',
    //   timeout: 10000,
    //   type: 'warning'
    // })
  }
  if (error.response) {
    switch (error.response.status) {
      case 504:
        // nativeToast({
        //   message: '服务器超时，请稍后再试',
        //   position: 'top',
        //   timeout: 10000,
        //   type: 'warning'
        // })
        break
      case 502:
        // nativeToast({
        //   message: 'Bad Gateway，请稍后再试',
        //   position: 'top',
        //   timeout: 10000,
        //   type: 'warning'
        // })
        break
      default:
        // nativeToast({
        //   message: '服务器故障，请稍后再试',
        //   position: 'top',
        //   timeout: 10000,
        //   type: 'warning'
        // })
    }
  }
  // 返回接口返回的错误信息
  return Promise.reject(error.response)
})

// 处理来自网络或者服务器的错误, 定义一个checkStatus函数 在拦截器中处理
// function checkStatus (response) {
//   return response
// }

// 处理来自程序端的错误, 创建一个checkCode的函数
function checkCode (res) {
  // iView.LoadingBar.finish()
  return res
}

/**
 * [post description] 类型一 公司 kjdp_ajax?returnType=json 接口，根据参数区分调用
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
// export function post (param) {
//   return axios.post('/kesb_req/kjdp_ajax?returnType=json', param.data, {'timeout': 10000}).then(checkStatus).then(checkCode)
// }

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: data,
      timeout: 100000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(checkCode)
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkCode)
  },
  postAsync (param) {
    return axios.post('/async_req/',
      param, {
        timeout: 10000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(checkCode)
  }
}

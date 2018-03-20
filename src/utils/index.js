
/**
 * [assembleData description] 调用公司内部接口使用
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export function assembleData (param) {
  let reqJson = []
  reqJson.push({
    REQ_MSG_HDR: {
      'SERVICE_ID': param.req.SERVICE_ID
    },
    REQ_COMM_DATA: param.req
  })
  return JSON.stringify({ REQUESTS: reqJson })
}

/**
 * 是否是空对象
 * @param   {Object}   object
 * @return  {Boolean}
 */
export function isEmptyObject (object) {
  return Object.keys(object).length === 0
}

export function getRandName () {
  if (localStorage.getItem('NAME')) {
    return localStorage.getItem('NAME')
  } else {
    let teams = ['郭靖', '黄蓉', '路飞', '孙悟空', '关羽', '张飞', '赵云', '诸葛亮', '韩信', '貂蝉', '陆小凤', '刘备', '曹操', '孙权', '张亮', '大乔', '小乔', '孙尚香', '西施', '林黛玉', '林冲', '鲁智深', '姜子牙', '飞廉', '士会', '姜维', '马超', '班超', '卫青', '霍去病', '李靖', '程咬金', '苏定方', '岳飞']
    let length = teams.length
    let name = teams[Math.floor((Math.random() * length))]
    localStorage.setItem('NAME', name)
    return name
  }
}

export function getRandID () {
  if (localStorage.getItem('ID')) {
    return localStorage.getItem('ID')
  } else {
    // 时间戳 + 随机三位数
    let ID = new Date().getTime() + Math.floor(Math.random() * 900) + 100
    localStorage.setItem('ID', ID)
    return ID
  }
}

export function getRandImg () {
  if (localStorage.getItem('Img')) {
    return localStorage.getItem('Img')
  } else {
    let items = ['cat.svg', 'cow.svg', 'dog.svg', 'ghost.svg', 'ovl.svg']
    let length = items.length
    let name = items[Math.floor((Math.random() * length))]
    localStorage.setItem('Img', '/static/images/avatar/' + name)
    return '/static/images/avatar/' + name
  }
}

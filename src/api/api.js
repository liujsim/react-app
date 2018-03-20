import http from './http.js'
import { assembleData } from '@/utils'

/**
 * [description] 注册
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const login = param => {
  let params = {
    req: {
      'SERVICE_ID': '4000001',
      'CHANNEL_ID': param.CHANNEL_ID,
      'CHANNEL_USER_ID': param.CHANNEL_USER_ID,
      'CHANNEL_USER_NAME': param.CHANNEL_USER_NAME,
      'CHANNEL_USER_IMG': param.CHANNEL_USER_IMG
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 申请比赛
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const applyGame = param => {
  let params = {
    req: {
      'SERVICE_ID': '4001001',
      'USER_CODE': param.USER_CODE
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 匹配
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const battle = param => {
  let params = {
    req: {
      'SERVICE_ID': '4001002',
      'USER_CODE': param.USER_CODE
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 获取比赛规则
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const queryRule = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4001003',
      'MATCH_NO': param.MATCH_NO,
      'USER_CODE': param.USER_CODE
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 获取题目
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const queryQuestions = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4001004',
      'MATCH_NO': param.MATCH_NO,
      'USER_CODE': param.USER_CODE
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 提交答案
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const submitAnswer = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4001005',
      'USER_CODE': param.USER_CODE,
      'MATCH_NO': param.MATCH_NO,
      'SUBJECT_ID': param.SUBJECT_ID,
      'SUBJECT_IDX': param.SUBJECT_IDX,
      'ANS_ID': param.ANS_ID ? param.ANS_ID : 0,
      'ANS_TIME': param.ANS_TIME
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 查询对方答案
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const queryAnswerResult = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4001006',
      'MATCH_NO': param.MATCH_NO,
      'USER_CODE': param.USER_CODE,
      'SUBJECT_ID': param.SUBJECT_ID,
      'SUBJECT_IDX': param.SUBJECT_IDX
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 查询比赛结果
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const queryGameResult = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4001007',
      'MATCH_NO': param.MATCH_NO,
      'USER_CODE': param.USER_CODE
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}

/**
 * [description] 查询世界排名
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const queryWorldRank = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4002001',
      'CHANNEL_ID': localStorage.getItem('CHANNEL_ID')
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}

/**
 * [description] 取消比赛请求
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const cancelGame = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4001008',
      'USER_CODE': param.USER_CODE
    }
  }
  console.log(params)
  let returnData = http.postAsync(assembleData(params))
  return returnData
}
/**
 * [description] 退出比赛
 * @param  {[type]} param [description]
 * @return {[type]}       [description]
 */
export const exitGame = param => {
  param = param || {}
  let params = {
    req: {
      'SERVICE_ID': '4001009',
      'USER_CODE': param.USER_CODE,
      'MATCH_NO': param.MATCH_NO,
      'SUBJECT_IDX': param.SUBJECT_IDX
    }
  }
  let returnData = http.postAsync(assembleData(params))
  return returnData
}

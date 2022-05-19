import request from '../utils/request'
import store from '../store'

const { user } = store.state

export const userLogin = ({ mobile, code }) => {
  return request({
    url: 'v1_0/authorizations',
    method: 'post',
    data: { mobile, code }
  })
}
export const refreshToken = () => {
  return request({
    url: 'v1_0/authorizations',
    method: 'put',
    headers: {
      Authorization: `Bearer ${user.refresh_token}`
    }
  })
}

export const sandSms = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`,
    method: 'get'
  })
}

export const getUserInfo = () => {
  return request({
    url: 'v1_0/user',
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const getChannles = () => {
  return request({
    url: 'v1_0/user/channels',
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const getArticles = (channel_id, timestamp) => {
  return request({
    url: 'v1_0/articles',
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    params: {
      channel_id,
      timestamp
    }
  })
}

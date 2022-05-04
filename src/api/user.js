import request from '../utils/request'
export const userLogin = ({ mobile, code }) => {
  return request({
    url: 'v1_0/authorizations',
    method: 'post',
    data: { mobile, code }
  })
}

export const sandSms = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`,
    method: 'get'
  })
}

import request from '@/utils/request'

export function getProducts() {
  return request({
    url: '/vue-element-admin/products',
    method: 'get'
  })
}

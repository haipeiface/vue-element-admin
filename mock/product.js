const _products = [
  { id: 1, title: 'iPad Pro', price: 500.01 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99 }
]

module.exports = [
  {
    url: '/vue-element-admin/products',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: _products
      }
    }
  }
]

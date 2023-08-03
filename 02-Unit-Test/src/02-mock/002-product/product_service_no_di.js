const ProductClient = require('./product_client')

class ProductService {
  constructor() {
    this.productClient = new ProductClient()
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems() // 판매가 가능한 아이템인지 filter
      .then((items) => items.filter((item) => item.available))
  }
}

module.exports = ProductService

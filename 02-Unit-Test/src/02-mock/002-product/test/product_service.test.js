const ProductService = require('../product_service.js')
const StubProductClient = require('./stub_product_client.js')

/***
 * Mock을 남발하지 않는 법
 */
describe('ProductSerivce - Stub', () => {
  // Mock 함수 변수 선언
  let productService

  // 초기화
  beforeEach(() => {
    productService = new ProductService(new StubProductClient())
  })

  /***
   * 아이템의 길이는 1개여야 한다.
   * 상품정보는 배열이고, 우유가 판매가능(true)해야 한다.
   */
  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems()
    expect(items.length).toBe(1)
    expect(items).toEqual([{ item: '🥛', available: true }])
  })
})

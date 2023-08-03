const ProductService = require('../product_service_no_di.js')
const ProductClient = require('../product_client.js')

// ProductClient 자체를 Mock
jest.mock('../product_client')

describe('ProductService', () => {
  // 비동기적으로 동작하는 Mock이고, 그 안에 판매 아이템을 정의
  const fetchItems = jest.fn(async () => [
    { item: '🥛', available: true },
    { item: '🍌', available: false },
  ])

  /*** mockImplementation
   * @see https://jestjs.io/docs/mock-functions#mock-implementations
   */
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  })

  let productService

  // 초기화
  beforeEach(() => {
    productService = new ProductService()
    // ** jest.config에서 clearMocks이 false인 경우, 아래 코드들 적용
    fetchItems.mockClear()
    ProductClient.mockClear()
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

  // **** fetchItems는 1번만 호출해야 한다. (jest.config에서 clearMocks이 true여야 함)
  it('test', async () => {
    const items = await productService.fetchAvailableItems()
    expect(fetchItems).toHaveBeenCalledTimes(1)
  })
})

const fetchProduct = require('../async.js')

/***
 * @define 비동기 코드를 테스트하는 5가지 방법
 * @see https://jestjs.io/docs/asynchronous
 */
describe('Async', () => {
  // 1. done 방법
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 })
      done() // done을 다 종료된 시점에서 호출
    })
  })

  // 2. return 방법 : done 방식보다 return이 더 빠름 ⭐️
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 })
    })
  })

  // 3. async await 방법 ⭐️
  it('async - await', async () => {
    const product = await fetchProduct()
    expect(product).toEqual({ item: 'Milk', price: 200 })
  })

  // 4. async - resolves 방법
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 200,
    })
  })

  // 5. async - reject 방법
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  })
})

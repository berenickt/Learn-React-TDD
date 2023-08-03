/** Mock과 Stub의 차이
 *
 */
class StubProductClient {
  async fetchItems() {
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false },
    ]
  }
}

module.exports = StubProductClient

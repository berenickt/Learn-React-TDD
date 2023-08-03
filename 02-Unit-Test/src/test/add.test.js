const sum = require('../add')

test('adds 1 + 2 to equal 3', () => {
  // **** 테스트 코드 작성
  expect(sum(1, 2)).toBe(3)
})

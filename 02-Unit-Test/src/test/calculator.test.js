const Calculator = require('../calculator')

describe('계산기', () => {
  let cal

  // @see afterAll https://jestjs.io/docs/setup-teardown#repeating-setup
  // 공통적으로 사용하는 코드들, (e.g. 전역호출 등)
  // 각각의 테스트는 독립적으로 만들어야 함 ⭐️
  beforeEach(() => {
    cal = new Calculator()
  })

  // @define it => 계산기를 가리키는 3인칭 주어
  it('0으로 초기화', () => {
    expect(cal.value).toBe(0)
  })

  it('sets', () => {
    cal.set(9)
    expect(cal.value).toBe(9)
  })

  it('clear', () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0)
  })

  it('add', () => {
    cal.set(1)
    cal.add(2)
    expect(cal.value).toBe(3)
  })

  it('subtract', () => {
    cal.subtract(1)
    expect(cal.value).toBe(-1)
  })

  it('multiply', () => {
    cal.set(5)
    cal.multiply(4)
    expect(cal.value).toBe(20)
  })

  // 나누는 경우 복잡한 경우가 있어서 여기서 또 그룹지어줄 수 있습니다.
  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0)
      expect(cal.value).toBe(NaN)
    })
    it('1 / 0 === Infinity', () => {
      cal.set(1)
      cal.divide(0)
      expect(cal.value).toBe(Infinity)
    })
    it('4 / 4 === 1', () => {
      cal.set(4)
      cal.divide(4)
      expect(cal.value).toBe(1)
    })
  })
})

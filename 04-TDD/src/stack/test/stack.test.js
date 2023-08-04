const Stack = require('../stack.js')

describe('Stack', () => {
  // Mock 함수 변수 선언
  let stack

  // 각각의 테스트코드가 실행되기 이전에 초기화
  beforeEach(() => {
    stack = new Stack()
  })

  // 1. stack이 비어있으면, 스택 크기가 0 되어야 한다
  it('is created empty', () => {
    expect(stack.size()).toBe(0)
  })

  // 2. 아이템을 push하면, 스택 크기가 1이어야 한다
  it('allows to push item', () => {
    stack.push('🍌')
    expect(stack.size()).toBe(1)
  })

  // **** pop (꺼내기)
  describe('pop', () => {
    // 3. 스택이 비어있으면,
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.pop()
      }).toThrow('Stack is empty')
    })

    // 4. 스택에 2개 push하고, 1개 pop하면, 스택 크기가 1이어야 한다.
    it('returns the last pushed item and removes it from the stack', () => {
      stack.push('🍌')
      stack.push('🍎')

      expect(stack.pop()).toBe('🍎')
      expect(stack.size()).toBe(1)
    })
  })

  // **** peek (스택의 맨 위 head 표시)
  describe('peek', () => {
    // 5. 스택이 비어있으면,
    it('throws an error if stack is empty', () => {
      expect(() => {
        stack.peek()
      }).toThrow('Stack is empty')
    })

    // 4. 스택에 2개 push하고, 마지막에 있는 거 표시
    it('returns the last pushed item but keeps it in the stack', () => {
      stack.push('🍌')
      stack.push('🍎')

      expect(stack.peek()).toBe('🍎')
      expect(stack.size()).toBe(2)
    })
  })
})

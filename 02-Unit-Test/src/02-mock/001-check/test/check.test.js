const check = require('../check')

/*** jest의 Mock 함수
 * @see https://jestjs.io/docs/mock-functions#using-a-mock-function
 */
describe('check', () => {
  // Mock 함수 변수 선언
  let onSuccess
  let onFail

  // 각각의 테스트코드가 실행되기 이전에 초기화
  // jest가 제공해주는 Mock함수인 `jest.fn()`
  beforeEach(() => {
    onSuccess = jest.fn()
    onFail = jest.fn()
  })

  it('should call onSuccess when predicate is true', () => {
    // predicate가 true면, Mock 함수 2개를 전달
    check(() => true, onSuccess, onFail)

    /**
     * @see https://jestjs.io/docs/expect#tohavebeencalledtimesnumber
     * expect(onSuccess.mock.calls.length).toBe(1);
     * => `onSuccess의 mock함수가 1번은 호출되어야 한다`
     * 👇 위 코드를 줄여서 아래와 같이 사용 가능
     */
    expect(onSuccess).toHaveBeenCalledTimes(1)

    /**
     * @see https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
     * expect(onSuccess.mock.calls[0][0]).toBe('yes');
     * => `onSuccess의 mock함수의
     * => calls의 첫번쨰로 호출된 함수의 첫번쨰 인자가 yes여야 한다`
     * 👇 위 코드를 줄여서 아래와 같이 사용 가능
     */
    expect(onSuccess).toHaveBeenCalledWith('yes')

    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0)
  })

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail)

    expect(onFail).toHaveBeenCalledTimes(1)
    expect(onFail).toHaveBeenCalledWith('no')
    expect(onSuccess).toHaveBeenCalledTimes(0)
  })
})

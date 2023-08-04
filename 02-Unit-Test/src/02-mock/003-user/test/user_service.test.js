const UserService = require('../user_service')
const UserClient = require('../user_client')
jest.mock('../user_client')

describe('UserService', () => {
  // Mock
  const login = jest.fn(async () => 'success')
  UserClient.mockImplementation(() => {
    return {
      login,
    }
  })

  // Mock 함수 변수 선언
  let userService

  // 초기화
  beforeEach(() => {
    userService = new UserService(new UserClient())
  })

  /***
   * 첫번쨰 로그인이라면
   */
  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc')
    expect(login.mock.calls.length).toBe(1)
  })

  /***
   * 로그인한 다음 또 다시 로그인을 한다면
   */
  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('abc', 'abc')
    await userService.login('abc', 'abc')

    expect(login.mock.calls.length).toBe(1)
  })
})

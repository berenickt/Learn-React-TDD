/** Mock (모조품)
 * @summary 테스트하고자 하는 코드가 의존하는
 * function이나 class에 대해 모조품(Mock)을 만들어
 * '일단' 돌아가게 하는 것
 *
 * 3개의 콜백함수를 인자로 받음
 * @param {*} predicate
 * @param {*} onSuccess
 * @param {*} onFail
 */
function check(predicate, onSuccess, onFail) {
  // predicate가 성공하면
  if (predicate()) onSuccess('yes')
  else onFail('no')
}

module.exports = check

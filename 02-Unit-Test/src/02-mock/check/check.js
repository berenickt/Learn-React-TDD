/**
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

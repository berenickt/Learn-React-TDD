# 1. 유닛테스트 라이브러리들

유닛테스트는 2가지 절차로 나뉩니다.

1. `Test Runner`
   - 테스트를 실행 후 결과 생성
   - 관련 라이브러리 (e.g. Mocha, ...)
2. `Assertion`
   - 테스트 조건, 비교를 통한 테스트 로직
   - 관련 라이브러리 (e.g. Chai, expect.js, better-assert, ...)

과거에는 Test Runner와 Assertion 각각의 라이브러리를 조합해서 썼었는데, 요즘은 Jest라는 1가지 테스트 툴로 통합해서 쓰는 추세입니다.

---

# 2. Jest

> @ see https://jestjs.io/
>
> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
>
> It works with projects using: Babel,
> TypeScript, Node, React, Angular, Vue and more!
>
> 제공해주는 주요 기능
>
> - zero config
> - snapshots
> - isolated
> - great api
>
> 홍보내용
>
> - FAST AND SAFE(빠르고 안전함)
> - CODE COVERAGE(코드 적용범위)
> - EASY MOCKING(쉬운 모킹)
> - GREAT EXCEPTIONS(특별한 예외)
> - PHILOSOPHY(철학)

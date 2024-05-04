// Dead Code : 실행되지 않는 코드

function square(x) {
  console.log('return 전')
  return x * x ;
  console.log('return 후') // Dead Code
}

console.log('함수 호출 전')
console.log(square(5))
console.log('함수 호출 후')


/*      <실행 결과>

함수 호출 전
return 전
25
함수 호출 후

*/
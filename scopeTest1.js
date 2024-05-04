// Scope: 범위, 영역
let x = 3; // 글로벌 변수, 전역 변수(Global Variable)

function myFunction() { // 블록문(Block Statement)
  let x = 5; // 로컬 변수, 지역 변수(Local Variable)
  console.log(x); // 5
}

myFunction();
console.log(x); // 3


/* <실행 결과>

3
3

*/

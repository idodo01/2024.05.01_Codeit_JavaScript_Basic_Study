// 상수 (constant): 변하지 않는 값

// 1. 상수명 작성 방법
//  1) 모두 대문자로 작성
//  2) 두 단어 이상시, _로 연결
//    ex) MY_NUMBER

// 2. 상수 값을 선언하지 않으면 오류


const PI = 3.14; // 원주율
let radius = 0; // 반지름

// 원의 넓이를 계산하는 함수
function calculateArea(radius) {
  return PI * radius * radius;
}

console.log(calculateArea(3))
console.log(calculateArea(5))
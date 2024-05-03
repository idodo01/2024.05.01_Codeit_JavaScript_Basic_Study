// 자바스크립트는 자동 형변환을 한다
// 상황에 따라서 유연하게 연산하는 것이 장점이 될 수도 있지만,
// 예상치 못한 형태로 연산이 될 수도 있다는 점을 알고 있어야 한다.

//  String & Number연산
console.log('4' + 2) // 42 , + 연산일 경우, String 연산처럼 작동
console.log('4' - 2) // 2
console.log('4' * 2) // 8
console.log('4' / 2) // 2

// String & Boolean 연산, true는 1으로 false는 0로 연산
console.log('4' + true) // 4true, + 연산일 경우, String 연산처럼 작동
console.log('4' - true) // 3
console.log('4' * true) // 4
console.log('4' / true) // 4

// Number & Boolean 연산, true는 1으로 false는 0로 연산
console.log(4 + true) // 5
console.log(4 - true) // 3
console.log(4 * false) // 0

// NaN
console.log(4 / 'two')

// 자바스크립트는 자동 형변환을 한다
// 상황에 따라서 유연하게 연산하는 것이 장점이 될 수도 있지만,
// 예상치 못한 형태로 연산이 될 수도 있다는 점을 알고 있어야 한다.

// 관계 비교 연산(<, <=, >, >=)
console.log(2 < '3') // 2 < 3, true
console.log(2 > true) // 2 > 1, true
console.log('2' <= false) // 2 <= 1, false
console.log('two' >= 1) // NaN 값을 비교할 수 없기에 false

// 같음 비교 연산 (===, !==, ==, !=)
console.log(1 === '1') // ===은 자료형이 동일한지도 체크, false
console.log(1 === true) // ===은 자료형이 동일한지도 체크, false
console.log(1 == '1') // 자동 형변환으로 1 == 1, true
console.log(1 == true) // 자동 형변환으로 1 == 1, true

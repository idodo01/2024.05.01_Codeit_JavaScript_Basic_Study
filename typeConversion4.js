// 형 변환(Type Conversion)
// Boolean 함수를 이용하여, 불린형으로 변환하기

// 문자 ''와 숫자 0만 false
// 여기서 주의할 점은, 문자 ' '은 true

// Boolean(NaN)도 false


// 1. 문자
let x = '문자';
console.log(x); // '문자'
console.log(typeof x) // string

// 문자 -> 불린
console.log(Boolean(x)); // 
console.log(typeof Boolean(x)) // Boolean
// number

// 2. 숫자
let z = 123;
console.log(z); // 123
console.log(typeof z) // number

// 숫자 -> 불린
console.log(Boolean(z)); // 1
console.log(typeof Boolean(z)) // Boolean



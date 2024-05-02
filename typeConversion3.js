// 형 변환(Type Conversion)
// Number 함수를 이용하여, 숫자로 변환하기

// 1.1 '문자' 문자
let x = '문자';
console.log(x); // '문자'
console.log(typeof x) // string

// 문자 -> 숫자
console.log(Number(x)); // NaN(Not A Number)
console.log(typeof Number(x)) // number

// 1.2 '123' 문자
let y = '123';
console.log(y); // '123'
console.log(typeof y) // string

// 문자 -> 숫자
console.log(Number(x)); // 123
console.log(typeof Number(x)) // number

// 2. 불린 
let z = true;
console.log(z); // true
console.log(typeof z) // boolean

// 불린 -> 숫자
console.log(Number(z)); // 1
console.log(typeof Number(z)) // number



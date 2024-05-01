// typeof 연산자
// typeof 값 : 값의 자료형을 문자열로 반환
console.log(typeof 1) // 'number'
console.log(typeof 'IDO') // 'string'
console.log(typeof true) // 'boolean'

// 정수, 소수 상관없이 'number'  반환 
console.log(typeof 1)
console.log(typeof 1.0)

// 문자열
console.log(typeof '1')
console.log(typeof "1")
console.log(typeof `1`)

// 변수, 함수

let name = 'IDO'

function sayHello() {
  console.log('Hello')
};

// 변수는 안에 있는 값에 따라서
console.log(typeof name)
// 함수는 'function'
console.log(typeof sayHello)

// typeof 연산자는 
// 우선순위가 높기에 먼저 실행됨

// 'string'IDO 반환
console.log(typeof 'Hi'+'IDO')

// Number' - 1 이라서 NaN 반환 
console.log(typeof 2 - 1) 
// 숫자 먼저 계산하고 typeof 하려면
// 괄호를 이용한다
console.log(typeof (2 - 1)) 
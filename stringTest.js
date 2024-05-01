// 문자열을 감싸는 것은
// '',"" 모두 가능

console.log('문자열')
console.log("문자열")

// 내부에서 '' "" 를 사용할 경우,
// \ 으로 구분해줘야 한다
console.log("I'm IDO")
console.log("He said \"I'm IDO\"")
console.log('He said "I\'m IDO"')

// \를 자주 사용하면 가독성이 떨어지기에
// `` 를 사용하는 방법도 있다
console.log(`I'm IDO`)
console.log(`He said "I'm IDO"`)

// 문자열로 작성된 숫자를 더할 경우
// 문자열이 이어붙는다
console.log('1'+'2')

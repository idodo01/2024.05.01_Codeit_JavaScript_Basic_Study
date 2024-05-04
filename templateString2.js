// 템플릿 문자열 (template strings)
// template: 일정한 툴, 형식

let myNumber = 3;

function getTwice(x) {
  return x * 2;
}


// 템블릿 문자열, 기호 ` 로 감싸준다.
console.log(`${myNumber}의 두배는 ${getTwice(myNumber)}입니다.`);
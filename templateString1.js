// 템플릿 문자열 (template strings)
// template: 일정한 툴, 형식

let year = 2024;
let month = 5;
let day = 4;

console.log('생년원일은 '+year+'년 '+month+'월 '+day+'일 입니다.');

// 템블릿 문자열, 기호 ` 로 감싸준다.
console.log(`생년원일은 ${year}년 ${month}월 ${day}일 입니다.`);

// 기호 '를 사용하면 작동안됨
console.log('생년원일은 ${year}년 ${month}월 ${day}일 입니다.');


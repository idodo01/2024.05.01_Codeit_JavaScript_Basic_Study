// 여기에 코드를 작성하세요

let num1 = 1;
let num2 = 1;
let temp = 0;
let cnt = 1;


console.log(num1);
console.log(num2);

while(cnt < 49) {
  temp = num1 + num2;
  console.log(temp);
  num1 = num2
  num2 = temp

  cnt++;
}

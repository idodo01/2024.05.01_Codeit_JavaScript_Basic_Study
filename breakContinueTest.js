// break와 continue

// break: 반복문을 탈출한다.
let i = 1;

while (i <= 10) {
  console.log(i);
  if (i === 7) {
    break;
  }
  i++;
}

// continue: 아래의 코드를 실행하지 않고, 다음 단계로 넘어간다
for (let i = 1; i <= 10; i++) {
  if(i % 2 === 0) {
    continue;
  }
  console.log(i);
}
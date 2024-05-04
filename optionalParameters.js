// 옵셔널 파라미터 (Optional Parameters)
// 마지막 파라미터로 사용되어야 밀림 현상 없음

function introduce(name, age, nationality = '한국') {
  console.log(`이름: ${name}`); 
  console.log(`나이: ${age}살`); 
  console.log(`국적: ${nationality}`); 
}


introduce('코드잇','999','미국')
console.log('')
introduce('아이두','1')
const fs = require('fs');

console.log('시작!');
fs.readFile('readme2.txt', (err, data) => {
  if (err){
    throw err;
  }
  console.log(`1번, ${data.toString()}`);
});
fs.readFile('readme2.txt', (err, data) => {
  if (err){
    throw err;
  }
  console.log(`2번, ${data.toString()}`);
});
fs.readFile('readme2.txt', (err, data) => {
  if (err){
    throw err;
  }
  console.log(`3번, ${data.toString()}`);
});
console.log('끝!');

// 비동기 메서드들은 백그라운드에 해당 파일을 읽으라고만 요청하고 다음 작업으로 넘어감
// 따라서 파일 읽기 요청만 세 번 보내고, console.log('끝')을 실행
// 수백 개의 요청이 들어와도 메인 스레드는 백그라운드에 요청 처리를 위임하고, 그 후로도 더 요청을 받을 수 있음
// 나중에 백그라운드가 각각 요청 처리가 완료되었다고 알리면 그 때 콜백함수를 처리하면 됨.

// 동기와 비동기 : 백그라운드 작업 완료 확인 여부
// 블로킹과 논블로킹 : 함수가 바로 return되는지 여부
const fs = require('fs');

console.log('시작!');
let data = fs.readFileSync('./readme2.txt');
console.log(`1번, ${data.toString() }`);
data = fs.readFileSync('./readme2.txt');
console.log(`2번, ${data.toString() }`);
data = fs.readFileSync('./readme2.txt');
console.log(`3번, ${data.toString() }`);
console.log('끝!');

// readFileSync 메서드를 사용하면 요청이 수백 개 이상 들어올 때 성능에 문제가 생김
// Sync 메서드를 사용할 때는 이전 작업이 완료되어야 다음 작업을 진행할 수 있음 -> 백그라운드가 작업하는 동안 메인 스레드는 아무것도 하지 못하고 대기하고 있어야 함
// Async 메서드를 사용하면  백그라운드가 동시에 작업할 수있고, 메인 스레드는 다음 작업을 처리할 수 있음
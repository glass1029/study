const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err){
    throw err;
  }
  console.log(data);  //buffer 형태로 데이터 출력
  console.log(data.toString());
});

// fs모듈은 기본적으로 콜백 형식의 모듈이므로, 실무에서 사용하기 불편
// 따라서 promise형식으로 바꿔주는 방식을 사용
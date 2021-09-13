const fs = require('fs').promises;  // fs모듈에서 promise속성 불러오기

fs.readFile('./readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
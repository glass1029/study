// 스트림끼리 연결하는 것을 '파이핑한다'고 표현

const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);
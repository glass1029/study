// readFile 방식의 buffer의 문제점: 용량이 큰 파일이라면 읽을 때 메모리에 그만큼의 버퍼를 만들어야함. 메모리가 많이 사용됨
// -> 버퍼의 크기를 작게 만든 후 여러 번으로 나눠보내는 Stream 방식. 메모리를 적게 사용할 수 있음.

const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data:', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end:', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error:', err);
});

// .on : 이벤트 리스너
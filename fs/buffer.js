/*
 * 버퍼링: 영상을 재생할 수 있을 때까지 데이터를 모으는 동작
 * 스트리밍: 방송인의 컴퓨터에서 시청자의 컴퓨터로 영상 데이터를 조금씩 전송하는 동작
 * 노드는 파일을 읽을 떄 메모리에 파일 크기만큼 공간을 마련해두며 파일 데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있도록 함.
 * 메모리에 저장된 데이터 = 버퍼

 * Buffer 객체가 제공하는 메서드
 * from(문자열): 무자열을 버퍼로 바꿀 수 있음
 * toString(버퍼): 버퍼를 다시 문자열로 바꿀 수 있음
 * concat(배열): 배열 안에 든 버퍼들을 하나로 합침
 * alloc(바이트): 빈 버퍼를 생성
 */

const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer);
console.log('length:',buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);
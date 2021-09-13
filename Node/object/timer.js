/**
 * selTimeout(콜백 함수, 밀리초) : 주어진 밀리초 이후에 콜백 함수를 실행
 * setInterval(콜백 함수, 밀리초) : 주어진 밀리초마다 콜백 함수를 반복 실행
 * setImmediate(콜백 함수) : 콜백 함수를 즉시 실행
 * 
 * clearTimeout(아이디) : setTimeout 취소
 * clearInterval(아이디) :  setInterval 취소
 * clearImmediate(아이디) : setImmediate 취소
 */

const timeout = setTimeout(() => {
  console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('3초 후 실행 종료');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 4000);

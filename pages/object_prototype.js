/*

Object prototype

- JavaScript에서 모든 객체들은 Object의 자손
- 모든 객체는 Object.prototype으로부터 메서드와 속성을 상속
- Object 생성자는 객체 Wrapper를 생성
- 주어진 값이 null이거나 undefined면 빈 객체를 생성해서 반환함
- 주어진 값이 있으면 값에 맞는 자료형의 객체를 반환함
- 생성자가 아닌 맥락에서 호출하면 new Object()와 동일하게 동작함

Object 생성자의 메서드 : assign(), create(), defineProperty(), defineProperties(), freeze(), getOwnPropertyDescriptor(), getOwnPropertyNames(), getOwnPropertySymbols(), getPrototypeOf(), is(), isExtensible(), isFrozen(), isSealed(), keys(), preventExtensions(), seal(), setPrototypeOf(), values()

*/

// 1. keys() ==============================
// Object.keys() 함수
// 주어진 객체 자신의 열거가능한 속성들의 이름의 배열을 반환

const object1 = {
  a: 'something',
  b: 42,
  c: false
};

console.log(Object.keys(object1));  // ["a", "b", "c"]


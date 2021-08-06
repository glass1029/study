// 1. Map() ==============================
// Array.prototype.map() 함수
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// 원 배열과 결과 값을 받아 온 배열의 길이는 항상 같다

const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

const officersIds = [];  // 빈 배열 선언
officers.forEach(function (officer) { //officers 배열로부터 데이터 한 줄 받아오는 펑션
  officerIds.push(officer.id);  //빈 배열에 받아온 데이터 한 줄 중 id 값 넣기
});

const officerIds = officers.map(function (officer) { //반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것
  return officer.id
});

const officersIds = officers.map(officer => officer.id);  //화살표로 더 간결하게 사용 가능

// 2. reduce() ==============================
// Array.prototype.reduce() 함수
// 하나의 결과값을 반환

const pioits = [
  { id: 10, name: "Poe Dameron", years: 14 },
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
  { id: 41, name: "Tallissan Lintra", years: 16 },
  { id: 99, name: "Ello Asty", years: 22 }
];

const totalYears = pioits.reduce(function (accumulator, pilot) {  //누적계산기인 accumulator : reduce()를 수행하며 생기는 값을 임시적으로 보관하는 형태
  return accumulator + pioits.years;
}, 0);  // 초기값부터 누적 계산이 시작 됨, 미설정 시 0부터 누적 계산

const totalYears = pioits.reduce((acc, pioit) => acc + pioits.years, 0);  //화살표로 더 간결하게 사용 가능

// 3. filter() ==============================
// Array.prototype.filter() 함수
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// 원 배열과 결과 값을 받아 온 배열의 길이가 다를 수 있음

const pilots = [
  { id: 2, name: "Wedge Antilles", faction: "Rebels" },
  { id: 8, name: "Ciena Ree", faction: "Empire" },
  { id: 40, name: "Iden Versio", faction: "Empire" },
  { id: 66, name: "Thane Kyrell", faction: "Rebels" }
];

const rebels = pioits.filter(function(pilot){
  return pioit.faction == "Rebels";
});

const empires = pioit.filter(function(pilot){
  return pioit.faction == "Empire"
})

const rebels = pilots.filter( pilot => pilot.faction == "Rebels" );  //화살표로 더 간결하게 사용 가능
const empires = pilots.filter( pilot => pilot.faction == "Empire" );  //화살표로 더 간결하게 사용 가능
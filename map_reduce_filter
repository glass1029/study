//1. Map()함수 ==============================

const officers = [
  { id: 20, name: 'Captain Piett'},
  { id: 24, name: 'General Veers'},
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

const testers = [
  {code: '황준호'}
]

officers = testers
// 이거는 주석
/* 이것도 주석 */

const officersIds = [];  // 빈 배열 선언
officers.forEach(function (officer){ //officers 배열로부터 데이터 한 줄 받아오는 펑션
  officerIds.push(officer.id);  //빈 배열에 받아온 데이터 한 줄 중 id 값 넣기
});

const officerIds = officers.map(function (officer){ //반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것
  return officer.id
});

const officersIds = officers.map(officer => officer.id);  //화살표로 더 간결하게 사용 가능

// 원 배열과 결과 값을 받아 온 배열의 길이는 항상 같다
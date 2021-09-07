const exam = {
  "data": {
    "movies": [
      {
        "id": 34599,
        "title": "To Be Someone",
        "rating": 7.9,
        "language": "en"
      },
      {
        "id": 34598,
        "title": "Stage Fright",
        "rating": 4.6,
        "language": "en"
      },
      {
        "id": 34596,
        "title": "Resurgence",
        "rating": 7.7,
        "language": "en"
      },
      {
        "id": 34593,
        "title": "The Way We Keep Dancing",
        "rating": 6.7,
        "language": "cn"
      },
      {
        "id": 34591,
        "title": "Out of Time",
        "rating": 5.9,
        "language": "en"
      }
    ]
  }
}

// 1번: movies title 들이 들어 있는 배열을 만들어주세요!

const titles = exam.data.movies.map(movie => movie.title);
console.log(titles);


// 2번: language 가 en 인 영화만 모아주세요!

const enMoviesOnly = exam.data.movies.filter(movie => {
  return movie.language == "en";
});
console.log(enMoviesOnly);


// 3번
// const compound = {
//   id : exam.data.movies.map(movie => movie.id),
//   title : exam.data.movies.map(movie => movie.title),
//   rating : exam.data.movies.map(movie => movie.rating),
//   language : exam.data.movies.map(movie => movie.language),
// };

const targetArr = exam.data.movies  // 1.먼저 movies배열만 빼서 담기 {movie1[], movie2[], ...}
const compound = targetArr.reduce((acc, current) => {  // reduce() 사용, accumulator에 저장, 배열 내 movie1[]부터 movie5[]까지 순차적으로 접근
  Object.entries(current).forEach((entry) => {  // movie1[]의 첫번째 "id" : 32599 에 접근 후 아래 구현부 실행 -> "language" : "en" 까지 순차적으로 반복 접근
    const [key, value] = entry; //const key = entry.key , const value = entry.value
    if (!acc[key]) { acc[key] = [] }  //맨 처음 id, title, rating, language의 경우 초기값 빈배열 선언해줌
    acc[key].push(value); //acc에 "id"인 key에 매칭된 value 값을 push
  })
  return acc  //reduce()의 accumulator 반환
}, {})  //reduce()의 반환 형태 object로 선언

console.log(compound);
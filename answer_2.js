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
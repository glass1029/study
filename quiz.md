```json
// exam 데이터를 사용하여 아래에 있는 문제를 풀어주세요!
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
```

```javascript
//// 문제
// 1번: movies title 들이 들어 있는 배열을 만들어주세요!
// 결과물 예시) 
const titles = [];
// ... 요 부분을 잘 작성하기 ...
console.log(titles) // 1번 결과물 참조

// 2번: language 가 en 인 영화만 모아주세요!
const enMoviesOnly = []
// ... 요 부분을 잘 작성하기 ...
console.log(enMoviesOnly) // 2번 결과물 참조
```

```javascript
1번 결과물 
['To Be Someone', 'Stage Fright', 'Resurgence', 'The Way We Keep Dancing', 'Out of Time']

2번 결과물
{
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
        "id": 34591,
        "title": "Out of Time",
        "rating": 5.9,
        "language": "en"
      }
    ]
  }
}
```


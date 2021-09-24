## 용어 정리
- Protocol: 컴퓨터 사이에서 데이터의 교환방식을 정의하는 규칙 체계
- HTTP(Hypertext Transfer Protocol): 브라우저-서버 간, 웹에서 이루어지는 데이터 교환 프로토콜
- WWW(World Wide Web)
- URI(Uniform Resource Identifier): 통합 자원 식별자
   1. URL(Uniform Resource Locator)
   2. URN(Uniform Resource Name)
- TCP(Transmission Control Protocol): 전송 제어 프로토콜. HTTP의 메세지 데이터를 전송하기 위해 TCP를 사용
- IP(Internet Protocol): 인터넷 프로토콜

## HTTP 메서드 
1. GET : 서버에서 어떤 리소스를 가져온다
2. PUT : 서버에 요청 메세지의 본문을 저장한다
3. DELETE : 서버에서 리소스를 제거한다
4. POST : 서버가 처리해야 할 데이터를 보낸다
5. HEAD : GET과 비슷하지만, 서버에서 어떤 리소스에 대해 헤더만 가져온다
6. TRACE : 메세지가 프락시를 거쳐 서버에 도달하는 과정을 추적한다
7. OPTIONS : 서버가 어떤 메서드를 수행할 수 있는지 확인한다

## HTTP status code
- 100~101 : 정보
- 200~206 : 성공
- 300~305 : 리다이렉션
- 400~415 : 클라이언트 에러
- 500~505 : 서버 에러

## 웹의 구성요소
- 프락시 : 클라이언트-서버 사이에 위치한 HTTP 중계자
- 캐시: 많이 찾는 웹페이지를 클라이언트 가까이에 보관하는 HTTP 창고
- 게이트웨이: 다른 애플리케이션과 연결된 특별한 웹 서버
- 터널: 단순히 HTTP 통신을 전달하기만 하는 특별한 프락시
- 에이전트: 자동화된 HTTP 요청을 만드는 준지능적 웹클라이언트


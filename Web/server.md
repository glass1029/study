### 참고 사이트
https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs


# Internet

- 여러 컴퓨터가 통신할 경우, 물리적으로 케이블을 연결하거나 무선으로 연결
- IP : 인터넷 프로토콜, 컴퓨터의 고유한 주소 (192.168.2.10)
- 도메인 : IP주소의 별칭 (google.com)
- 인트라넷 : 특정 조직의 구성원으로 제한된 네트워크
- 엑스트라넷 : 다른 조직과의 공유 및 협업을 위해 인트라넷의 전체 또는 일부를 개방하는 네트워크

# Web page, Web site, web server, search engine
- Web page : 웹 브라우저에서 표시할 수 있는 문서 (Firefox, Chrome, Opera, ...). 주로 '페이지'라고 함
- Web site : 그룹화되고 다양한 방식으로 연결된 웹 페이지의 모음. 주로 '웹사이트', '사이트'라고 함
- web server : 인터넷에서 웹사이트를 호스팅하는 컴퓨터
- search engine : 다른 웹페이지를 찾는 데 도움이 되는 웹 서비스 (Google, Bing, Yahoo, ...)

# 웹개발에 필요한 도구들
- 웹 페이지를 생성 및 편집 -> 텍스트 편집기
- 웹 서버에 파일을 업로드
- 웹 사이트 보기 -> 브라우저

# web server
- 웹 서버라는 용어는 하드웨어나 소프트웨어, 또는 둘 다 함께 작동하는 것을 의미할 수 있음
1. 하드웨어 측면의 웹 서버 : 웹 서버 소프트웨어와 웹 사이트의 구성요소 파일을 저장하는 컴퓨터. 인터넷에 연결하여 웹에 연결된 다른 장치와 물리적 데이터 교환을 지원
2. 소프트웨어 측면의 웹 서버 : 웹 사용자가 호스팅된 파일에 엑세스하는 방법을 제어하는 여러 부분이 있는데, 그 중 최소 단위가 HTTP 서버임.
   - HTTP 서버는 URL(웹 주소)과 HTTP(브라우저가 웹 페이지를 보기위해 사용하는 프로토콜)를 이해하는 소프트웨어
   - HTTP 서버는 저장하는 웹 사이트의 도메인 이름을 통해서 엑세스할 수 있으며, 호스팅된 웹 사이트의 콘텐츠를 최종 사용자의 장치로 전달
- 브라우저는 웹 서버에서 호스팅되는 파일이 필요할 때마다 HTTP를 통해 파일을 요청 -> 요청이 올바른 웹 서버에 도달하면 HTTP 서버는 요청을 수락, 요청된 문서를 찾음 -> HTTP를 통해 브라우저로 다시 내보냄 (찾지 못하면 404 오류 반환)

# HTTP server
- HyperText Transfer Protocol
- 두 컴퓨터 간에 하이퍼텍스트(링크된 웹 문서)를 전송하는 방법을 지정
- 프로토콜이란 두 컴퓨터 사이의 통신에 대한 규칙의 집합
- HTTP는 클라이언트와 서버가 통신하는 방법에 대한 명확한 규칙을 제공
- HTTP를 통해 파일을 요청할 때, 클라이언트는 파일의 URL을 제공해야 함
- 웹 서버는 최소한의 오류 메세지와 함께 모든 HTTP 요청에 응답해야 함
- 응답 과정
   1. 요청을 받으면, HTTP 서버는 요청된 URL이 기존 파일과 일치하는지 확인
   2. 일치한다면, 웹 서버는 파일 내용을 브라우저로 다시 보냄. 그렇지 않은 경우, 애플리케이션 서버에서 필요한 파일을 빌드함
   3. 두 서버에서 모두 가능하지 않은 경우, 웹 서버는 브라우저에 오류 메세지를 반환함. 가장 일반적인 오류는 404.

# 정적 웹 사이트
- 정적 사이트는 특별한 리소스 요청이 들어 올 때 서버에서 하드 코딩된 동일한 콘텐츠를 반환함
- 사용자가 페이지를 탐색하거나, 브라우저가 지정된 URL에 HTTP "get"요청을 보낼 때, 서버는 파일 시스템에서 요청한 문서를 검색하고 문서와 status를 포함한 HTTP 응답을 반환함

# 동적 웹 사이트
- 필요할 때에 동적으로 응답 콘텐츠가 생성됨
- 보통 HTML 템플릿 자리에 있는 자리 표시자에 데이터베이스에서 가져온 데이터를 넣어 생성됨. 이 방법은 많은 양의 콘텐츠를 저장하기에 정적 웹 사이트를 이용하는 것보다 효과적임.
- 동적 웹 사이트를 지원하는 코드는 서버에서 실행되어야 함 (server-side programming, back-end scripting)

# client-side
- 주 관심사는 렌더링된 웹 페이지의 모양과 행동을 개선시키는 것
- UI 구성요소 선택, 스타일 지정, 레이아웃 만들기, 탐색, 양식 유효성 검사 등
- HTML, CSS, JavaScript로 작성됨

# server-side 
- 주 관심사는 브라우저의 요청에 대한 응답으로 어떤 컨텐츠를 반환하는지 선택하는 것
- 제출된 데이터 및 요청의 유효성 검사, 데이터 저장 및 검색을 위한 데이터베이스 사용, 필요에 따라 올바른 데이터 전송과 같은 작업을 처리
- 다양한 프로그래밍 언어로 작성될 수 있음 (PHP, Python, Ruby, C#, ...)
- 개별 사용자에 맞게 정보를 효율적으로 전달할 수 있게 해주고, 사용자 경험을 훨씬 향상 시킬 수 있기 때문에 매우 유용함
- 정보를 데이터베이스에 저장하고, HTML 및 기타 유형의 파일(PDF, img, ...)을 동적으로 생성하고 반환할 수 있음
- 적절한 클라이언트 웹 프레임워크로 렌더링하기 위해 간단한 데이터(JSON, XML, ...)도 반환할 수 있음
- 서버는 데이터베이스에서 정보를 전송하는 것에 국한되지 않고, 소프트웨어 도구의 결과 또는 통신 서비스의 데이터를 반환할 수 있음
- 사용자만 접근할 수 있도록 제한하거나 사용자가 볼 수 있는 정보만 제공할 수 있게 컨텐츠에 대한 접근을 제한할 수 있음
- 세션을 만들 수 있어서 서버가 현재 사이트의 사용자 정보를 저장하거나 정보에 기반한 다른 응답을 보낼 수 있음
- 유저에 특화된 알림이나 일반적인 알림을 웹사이트, 이메일, SMS 등 통신 서비스를 통해 보낼 수 있음
- 웹 사이트는 사용자에 대한 많은 정보를 수집할 수 있음. 무엇을 검색하는지, 무엇을 사는지, 무엇을 추천하는지, 페이지에 얼마나 머무는지 등 데이터 분석을 기반으로 응답을 구체화할 수 있음.
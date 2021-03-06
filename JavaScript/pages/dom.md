# Dom
- Document Object Model
- HTML, XML과 같은 텍스트 파일로 만들어져 있는 웹 문서를 브라우저에 렌더링하려면, 웹 문서를 브라우저가 이해할 수 있는 구조로 메모리에 올려야 함. 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는 것을 DOM이라고 함.
- 모든 요소와 요소의 어트리뷰트 및 텍스트를 각각의 객체로 만들고, 이들 객체를 부모-자식 관계로 표현할 수 있는 트리구조로 구성
- 자바스크립트를 통해 동적으로 변경할 수 있으며, 변경된 DOM은 렌더링에 반영됨

## DOM의 기능
- HTML 문서에 대한 모델 구성
- HTML 문서 내의 각 요소에 접근/수정

## DOM의 속성
- property
- method
- event listener
- collection
- css style

## Dom tree
- HTML 태그는 부모자식 관계가 존재함
- 브라우저는 HTML 페이지를 로드하면서 이 관계에 따라 DOM객체들을 트리구조로 만듦
- 모든 엘리먼트는 HTML Element의 자식이고, HTML Elment는 Element의 자식이고, Element는 Node의 자식이다.

## Dom 메서드

### 한 개의 요소 노드 선택

- document.getElementById(id) 
  - 예) let el = document.getElementById('p1');
  - id 속성 값으로 한 개의 노드를 선택
  - 복수의 노드가 선택된 경우는 첫번째 요소만 반환

  ### 여러 개의 요소 노드 선택

  - document.getElementsByClassName(class)
    - 예) let el = document.getElementsByClassName('class-p');
    - 해당 클래스에 속한 요소를 모두 선택
    - 공백으로 구분하여 여러 개의 class를 지정 가능

  - document.getElementsByName(name)
    - 예) let el = document.getElementsByName('p_name');
    - 해당 name 속성값을 가지는 요소를 모두 선택

  - document.getElementsByTagName(태그명)
    - 예) let el = document.getElementsByTagName('t1');
    - 해당 태그 이름의 요소를 모두 선택
  
  ### 요소 생성
  - document.createElement(tagName)
    - 예) let el = document.createElement('li');
    - tagName에 맞는 HTML 요소를 생성

  - document.createTextNode(text)
    - 예) let el = document.createTextNode("god");
    - 해당 text의 text 노드 요소를 생성

  - document.write(text)
    - 예) document.write("god!");
    - HTML 출력 스트림을 통해 텍스트를 출력


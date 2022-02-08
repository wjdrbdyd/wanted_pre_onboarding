# 원티드 프리온보딩 코스
* [wanted_pre_onboarding]

<br/>

## 실행
1. [Clone or Download](https://github.com/wjdrbdyd/wanted_pre_onboarding.git)
2. custom-component 폴더에서 `$npm i` 실행
3. npm start
   
## Toggle
### 구현한 방법과 이유에 대한 간략한 내용
Toggle 기능은 `Button`을 클릭했을 때 on(true), off(false) 상태 값에 따라 Off(false)일 때의 UI → On(true)일 때의 UI를 바꿔줌으로써 구현하였다.
### Error Handling Log
Toggle 기능은 버튼을 클릭하여 상태 값만 바꾸면 되기에 기능 자체의 구현보다 상태 값의 따라 UI의 구현이 까다로웠다. Best의 방법인지는 모르겠으나 과거 HTML/CSS로 구현 해본 방식인 Off상태의 배경을 두고 그 위에 상태에 따라 토글버튼과 배경을 `transform`으로 오른쪽, 왼쪽으로 이동시키는 방법으로 Css Styling 외에는 문제가 없었다.
## Modal
### 구현한 방법과 이유에 대한 간략한 내용
Modal 기능은 `Toggle`기능과 비슷하게 `Button`을 클릭하여 Modal창 상태 값을 On(true)로 바꿔서 Modal창을 보여주고 Modal창이 보이는 상태에서 `x`버튼을 누르면 Modal창 상태값을 Off(false)로 바꿔 모달창을 안보이게하는 방법을 사용하였다.
### Error Handling Log
모달 기능도 상태값만 잘이용해서 Modal창을 보이게하고 안보이게하는 방법이기에 기능의 구현보다 Css Styling이 외에는 문제는 없었다.
## Tab
### 구현한 방법과 이유에 대한 간략한 내용
Tab기능은 `TabButton`을 클릭하였을 때 클릭한 Button의 index를 이용하여 클릭한 버튼의 `index(currentIndex)`와 Tab Data의 `index`가 같을 때 `active` 효과를 주어 배경색 및 박스그림자 Style을 다르게하여 탭버튼을 구현 하였고 `Tab내용`은 선택된 index에 해당하는 데이터만 보여주게끔 하였다. 다른 방법 또한 있겠지만 가장 자신 있게 구현할 수 있는 방식을 채택하였다.
### Error Handling Log
Tab구현에 있어 어려운점은 없었다.
## Tag
### 구현한 방법과 이유에 대한 간략한 내용
Tag기능은 input값을 입력하고 엔터를 칠 때 입력된 값을 `Tag List`의 끝부분에 추가한 후 Input값을 빈문자열로 만들었고, 삭제할 때는 `filter`함수를 이용하여 `Tag List`에서 선택한 Tag(index이용)를 제외한 목록을 Set하여 구현하였다.
### Error Handling Log
Tag기능구현에 있어 어려운점은 없었다.
## AutoComplete
### 구현한 방법과 이유에 대한 간략한 내용
AutoComplete기능은 input값을 입력했을 때 `Tab`기능과 비슷하게 `filter`함수를 이용하였는데 여기서는 요소를 제외하는것이 아닌 `indexOf`를 이용하여 입력한 값이 포함된 목록을 보여주고 그 보여진 목록에서 값을 선택하면 input값에 넣어 줬다.
### Error Handling Log
Autocomplete 처음 구현 할 당시에 문제로 값을 최초 입력했을 때는 목록이 잘나왔으나 두번째 입력하면 목록이 사라지는 문제가 있었다. console로 데이터를 확인해본 결과 search후에 원래 데이터가 아닌 검색된 목록(searchList)에서 재검색하여 생기는 문제였다. 그리하여 originalList와 searchList를 나누어 onChange 또는 focus event가 발생할 때 searchList가아닌 original데이터에서 검색할 수 있게하여 처리하였다.
## ClickToEdit
### 구현한 방법과 이유에 대한 간략한 내용
ClickToEdit는 `editMode` 상태값에 따라 editMode On(true)이면 input tag를 rendering하여 입력할 수 있게 하였고 editMode Off(false)이면 p tag를 이용하여 읽기전용 UI를 보여줬다. 입력할 때의 UI와 읽기모드 일 때의 UI를 다르게 보이게 하는데 있어서 가장 좋은방법인것 같았다.
### Error Handling Log
사전과제중 ClickToEdit가 가장 어려웠다. 처음 구현해보는 것이기도 했고 gif만보고 처음 구현할 때는 `editMode`상태에 따라 input태그에 doubleclick event로 readonly속성을 넣어서 구현 했었다. 그 때 문제점으로 예시 gif와 다르게 읽기전용일 때 글자의 위치를 위쪽 경계선으로 맞추는데 있어 어려움과 예시에서는 doubleclick으로의 동작이 아니어서 그냥 click으로 변경하였더니 readonly속성이 있으나 없으나 다른점이 없었다. 그리하여 잘못된 접근이라 생각하여 clickToEdit검색을 하였더니 `editMode`에 따라 input tag와 p tag로 나누어 보여주는걸 확인했다. 사실상 `ClickToEdit`과제는 구현은 직접하였으나 문제해결 아이디어는 직접 도출해내지 못했기에 반쪽자리 성공이라 생각한다. 마지막으로 UI또한 작성시점 기준으로 완벽하지 못한상태로서 다시 한번 점검 해야한다.

## 과제 > 여섯 가지의 예시 중에서 2가지 이상을 구현 
* Toggle.js
* Modal.js
* Tab.js
* Tag.js
* AutoComplete.js
* ClickToEdit.js

<br/>

## 요구
* Create React App 활용
* CSS (TailWind, Styled-component) > Styled-component 사용 예정
* 기능 구현에 직접적으로 영향 주는 라이브러리 사용 `불가` 

<br/>

## 작업 환경 Setting 순서
1. Github Repository 이름: wanted_pre_onboarding, public, README.md 체크 생성
2. Repo Clone
3. npx create-react-app custom-component React Prj 생성
4. src폴더 내부 구조 
```javascript
/src
  App.js
  App.css
  /component
    Toggle.js
    Modal.js
    Tab.js
    Tag.js
    AutoComplete.js
    ClickToEdit.js
```

5. App.js 에서 모든 컴포넌트들을 눈으로 확인할 수 있도록 렌더링
</br>



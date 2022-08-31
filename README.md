# 1. 관심사 분리

> 하나의 파일에는 하나의 관심사를 다루는 것이 흐름 복잡도를 줄이고 직관적이라 판단

<br />

## 1.1 로직과 뷰 분리

- component내에 styled-components로 view에 대한 내용만 넣음
<img width="611" alt="image" src="https://user-images.githubusercontent.com/16061038/187726426-51c5d23f-61c4-4171-ae41-f552c25a18ea.png">

- component에서 필요한 상태 관리와 로직은 hooks로 분리함
<img width="292" alt="image" src="https://user-images.githubusercontent.com/16061038/187725797-a6e1c11d-f9c2-4fbd-aa69-cd4c9057d0da.png">




## 1.2 컴포넌트, API 코드 분리

- 토큰 등 서버 api를 사용하는 코드는 모두 services 폴더 안에서 관리
<img width="292" alt="image" src="https://user-images.githubusercontent.com/16061038/187726806-dffce97a-6a48-4b3b-8147-f6e1128793d3.png">

# 2. 스타일 작성 방법

- 효율적인 진행을 위해 팀에서 보편적으로 사용했던 styled-components를 사용
- 로직과 뷰를 분리하면서 하나의 컴포넌트에 스타일을 함께 넣었지만 공통적으로 사용되는 부분은 common 파일로 통합
<img width="288" alt="image" src="https://user-images.githubusercontent.com/16061038/187727220-6ee35564-dc96-4c9d-bc89-e774f5a5ccdf.png">
<img width="448" alt="image" src="https://user-images.githubusercontent.com/16061038/187727519-b90506f8-6a01-46fb-98df-e6f1898add6b.png">


# 3. 상태관리

## 3.1 Context API

- 페이지 내의 여러 하위 컴포넌트에서 drilling 없이 state 접근할 수 있도록 context api 사용

<img width="293" alt="image" src="https://user-images.githubusercontent.com/16061038/187727880-673547dc-a5fd-490a-9c60-a4300aa91887.png">
<img width="324" alt="image" src="https://user-images.githubusercontent.com/16061038/187728067-d8da7736-3f9a-40e8-8292-5e9b228dae42.png">


# 4. 의존성 관리

- 과제에서는 localstorage를 사용하라고 되어있지만 특정 저장소에 의존하지 않기 위해 storage를 따로 관리하자

<img width="273" alt="image" src="https://user-images.githubusercontent.com/16061038/187728342-02e6a90f-7460-487f-967c-3d15e10b71af.png">
<img width="945" alt="image" src="https://user-images.githubusercontent.com/16061038/187728905-3821caee-1da5-43b5-938b-ba291d295277.png">


---

# 5. 베이스 코드 구조

```
src
├─components // 컴포넌트 단위로 구현된 뷰, 각 컴포넌트에 필요한 state가 뷰와 함께 있음
│  ├─auth
│  │  └─hooks
│  ├─common // 재사용 컴포넌트
│  ├─layout // 레이아웃 관련 컴포넌트, pages에서 사용
│  └─todo
│     └─hooks
├─context // 컨텍스트
├─hooks // 공통 hooks
├─pages // 페이지 단위 뷰, components의 컴포넌트들을 조합해 페이지 구성
│  ├─auth
│  └─todo
├─router
├─services // 서버 관련 코드
│  ├─api
│  └─model // 도메인 관련 스키마
└─utils
```

# 6. Commit convention


| Type     | Description                   |
| -------- | ----------------------------- |
| feat     | Add a new feature             |
| fix      | Fix the bug                   |
| design   | UI design changes such as CSS |
| style    | code formatting               |
| refactor | Refactoring the code          |
| docs     | Modify the document           |
| chore    | etc.                          |

# 7. 회의기록
https://iron-herring-068.notion.site/1c9310febab84b48ac081d299e6aec1f?v=251a302797184923842b4e7c79bf2c62


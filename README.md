# React 공부 프로젝트

이 프로젝트는 리액트를 공부하면서 작성한 코드들을 모아둔 거임. `lecture2`부터 `lecture26`까지 각 폴더에 '리액트 국비지원 학원 강의'를 들으면서 만든 코드들이 있고, 각각 독립적으로 실행 가능함.

## 목차

- [프로젝트 구조](#프로젝트-구조)
- [준비물](#준비물)
- [프로젝트 설치 및 실행 방법](#프로젝트-설치-및-실행-방법)
  - [1. 프로젝트 클론](#1-프로젝트-클론)
  - [2. 의존성 설치](#2-의존성-설치)
  - [3. 각 폴더별 실행 방법](#3-각-폴더별-실행-방법)
    - [개발 서버 실행](#개발-서버-실행)
    - [빌드 및 배포](#빌드-및-배포)
- [폴더 목록 및 설명](#폴더-목록-및-설명)
- [추가 정보](#추가-정보)

---

## 프로젝트 구조

```
/project-root
  ├── src/
  │   ├── assets/
  │   ├── lecture2/
  │   ├── lecture3/
  │   ├── lecture4/
  │   ├── ...       # lecture5 ~ lecture26까지 존재함
  │   └── index.css
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── vite.config.js
```

- 각 `lectureX` 폴더에 내가 공부한 코드들이 들어있음.
- `vite.config.js`를 이용해서 다중 페이지 애플리케이션으로 설정했음.

## 준비물

- [Node.js](https://nodejs.org/) (버전 16 이상 추천)
- npm은 Node.js 설치하면 같이 설치됨.

## 프로젝트 설치 및 실행 방법

### 1. 프로젝트 클론

먼저, 이 저장소를 로컬로 클론함:

```bash
git clone https://github.com/your-username/react-study.git
cd react-study
```

### 2. 의존성 설치

프로젝트 디렉토리에서 다음 명령어로 필요한 패키지를 설치함:

```bash
npm install
```

### 3. 각 폴더별 실행 방법

각 폴더는 독립적으로 실행되며, `package.json`의 스크립트를 통해 쉽게 실행할 수 있음.

#### 개발 서버 실행

실행하려는 폴더에 따라 다음 명령어를 입력하면 됨:

```bash
# lecture2 실행
npm run dev:2

# lecture3 실행
npm run dev:3

# 필요에 따라 lectureX 실행 (X는 번호)
npm run dev:X
```

- 예를 들어, `lecture21`을 실행하려면:

  ```bash
  npm run dev:21
  ```

- 개발 서버가 시작되면 터미널에 표시된 로컬 주소로 접속하면 됨. 보통 `http://localhost:5173` 이런 주소임.

#### 빌드 및 배포

프로덕션 빌드를 하려면 다음 명령어를 사용함:

```bash
# lecture2 빌드
npm run build:2

# lecture3 빌드
npm run build:3

# 필요에 따라 lectureX 빌드 (X는 번호)
npm run build:X
```

빌드 결과물은 `dist` 폴더에 생성됨.

## 폴더 목록 및 설명

각 폴더의 제목과 간단한 설명은 다음과 같음:

| 번호      | 제목                                 | 설명                                     |
| --------- | ------------------------------------ | ---------------------------------------- |
| lecture2  | 컴포넌트 생성, import/export         | 리액트 컴포넌트 생성하고 모듈 시스템 공부함 |
| lecture3  | JSX 마크업, JSX에서 자바스크립트 사용 | JSX 문법과 JSX 내에서 JS 표현식 사용해봄   |
| lecture4  | 컴포넌트에 props 전달                | 부모에서 자식으로 props 전달하는 방법 배움 |
| lecture5  | 조건부 렌더링                        | 조건에 따라 컴포넌트 렌더링 제어하는 법   |
| lecture6  | 리스트 렌더링                        | 배열 데이터를 리스트 형태로 렌더링함      |
| lecture7  | 이벤트 핸들링                        | 이벤트 처리하고 핸들러 함수 사용하는 법   |
| lecture8  | useState 공부                        | useState 훅으로 상태 관리해봄             |
| lecture9  | State 업데이트 방법 및 다중 객체 업데이트 | 복잡한 상태 업데이트와 불변성 유지 방법   |
| lecture10 | 리스트 상태 업데이트                | 리스트 상태를 추가, 삭제, 수정하는 방법   |
| lecture11 | 형제 간 상태 관리, useReducer        | useReducer로 상태 관리하고 디스패치함     |
| lecture12 | Context API로 전역 상태 관리         | Context API를 사용해 전역 상태 관리해봄   |
| lecture13 | useRef 값 참조                       | useRef로 값 저장하고 참조하는 법          |
| lecture14 | useRef로 DOM 조작                    | useRef로 DOM 요소 직접 제어함             |
| lecture15 | useEffect 훅 (렌더링 후 실행)        | useEffect로 사이드 이펙트 처리해봄        |
| lecture16 | useMemo 훅 (메모이제이션)            | 성능 최적화를 위한 메모이제이션 사용함    |
| lecture17 | 커스텀 훅 만들기                     | 재사용 가능한 로직을 커스텀 훅으로 만들었음 |
| lecture18 | CSS 모듈 사용                        | CSS 모듈로 컴포넌트 스타일링함            |
| lecture19 | Todo List                            | 간단한 Todo List 앱 구현해봄             |
| lecture20 | Movie Search App                     | 영화 검색 앱 만들어봄                    |
| lecture21 | 전역 상태 관리 (Zustand 라이브러리)  | Zustand로 전역 상태 관리해봄             |
| lecture22 | MSW 라이브러리 사용 (Mock Server)    | MSW로 목업 서버 구성해봄                 |
| lecture23 | React Query 사용                     | React Query로 데이터 패칭 및 캐싱 공부함 |
| lecture25 | 동적 라우팅 및 병렬 쿼리             | React Router와 React Query로 고급 기능 써봄 |

## 추가 정보

- **의존성 관리**: 각 폴더에서 사용하는 라이브러리는 `package.json`에 다 포함돼 있음. 필요에 따라 추가 패키지를 설치해야 할 수도 있음.
- **Vite 설정**: `vite.config.js`로 다중 페이지 설정해서 각 폴더별로 독립적인 개발 환경 제공함.
- **Alias 사용**: 코드에서 `@`, `@stores`, `@lib`, `@hooks` 이런 별칭을 써서 경로를 단순화했음. `vite.config.js`의 `alias` 설정에서 정의됨.

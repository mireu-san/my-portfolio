This project will be the portfolio page of mireu-san (me).

Used React.js & Bootstrap 5

Personal thought:
- CSS in JS 로 프로젝트를 구현 하려 했지만, 일단은 CSS 파일에 분리해서 작성하기로 했습니다.
- 1차 최종 완성 후, 리펙토링 작업 시 CSS in JS 를 구현화 할 생각에 있습니다.
- 이번에는 git 버전 관리를 가능한 한토막씩 끝날 때 마다 하는 것을 목표로 하고 있습니다.

Blueprint of this project:

1. 최초의 화면 - Front-page (Cover) 
2. About me - 개인 소개 페이지 입니다.
3. Thoughts - 코딩을 할 때, 직무에 대한 생각 등을 적어둔 개인의 생각을 적어둔 공간입니다. | 어쩌면 프로그래밍을 공부해 온 과정을 적어 두는 공간이 포함 될 수도 있습니다.
4. Portfolio - 지금까지 만들어 본 프로젝트들을 모아 둔 곳 입니다.
5. Contacts - 제 개인 연락처입니다. 이 부분에 한에서 백엔드 요소 또는 메일로 전송 받는 기능을 이번에는 제대로 구현 해 보는것이 목표입니다.

Checklist: (부제: 개인 포트폴리오 페이지 맞음)
- [] 실제 서비스를 공개적으로 배포하고 운영해보는 경험을 해 보았다
- [] 유저의 피드백에 따라 성능/사용성을 개선하고 신규 기능을 추가해보았다
- [] 발견되는 버그와 개선사항을 정리하고 쌓인 이슈들을 체계적으로 관리 해 보았다
- [] 코드를 지속적으로 리펙토링하고 디자인패턴을 적용 해 보았다
- [] 위의 시도에서 더 좋은 설계와 더 빠른 개발 사이의 트레이드오프를 고민을 해보았다
- [] 반복되는 수정과 배포에 수반되는 작업들을 자동화해보았다
- [] 언어나 프레임워크의 기능만으로 구현 할 수없는 것들을 직접 구현해보았다
- [] 내가 사용한 라이브러리나 프레임워크의 문제점이나 한계를 느끼고 개선해보았다
- [] 코드나 제품의 퀄리티를 유지하기 위한 분석툴이나 테스트툴을 도입해보았다
- [x] 타인과의 협업을 효율적으로 하기위한 고민을 해보았다

수정 계획안:
This page should be the blueprint like!

1. main page - home -> localhost:3000/
1.1 Router.js (from src/Components)

2. sub menu -> (from src/Routes)

2.1 (folder in Routes)aboutme -> About.js -> /about
2.2 (folder in Routes)thoughts -> Thoughts.js -> /thoughts
2.3 (folder in Routes)portfolio -> Portfolio.js -> /portfolio
2.4 (folder in Routes)contacts -> Contacts.js -> /contacts
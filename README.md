<h1>TEAM wansungmoon README</h1>

<img src="./readme_src/readme1.PNG" />

- 원본 github 주소: https://github.com/JiwanBang/team_wansungmun
- USER TEST ID: test1@naver.com
- USER TEST PW: 1234qwer
- 배송기사 TEST ID: test3@naver.com
- 배송기사 TEST PW: 1234qwer

## 프로젝트 소개

- 모바일 웹 UI 쇼핑몰 사이트
- 유저는 상품 등록 및 판매 가능
- 주문한 상품에 대한 실시간 배송 추적

## 미션 가이드

- 목표: 쇼핑몰 사이트 구축

### UX

- 물건 판매 및 구매

- 지도 확인 기능

- 배달 현황 공유 프로그램(네이버 지도, 카카오 맵 등 내비게이션 프로그램과 카카오T, 배달의 민족과 같은 실시간 배달 현황 공유 프로그램)

- 결제에 대한 중간 관리(포인트 사용)

### UI

- 사용자: 회원가입, 로그인, 로그아웃, 정보 수정

- 관리자: 사용자와 게시판에 대해 수정/사용자의 문의에 대한 답변/게시판 카테고리에 대한 설정/서비스 사이트와 분리 필요

- 포인트: 결제 시스템 대신으로 사용. 현금과 같은 기능

- 게시판: 글 작성, 사진/영상 등 업로드 가능, 회원에 대해 권한 부여, 포인트로 구매 설정 가능

- 지도: 지도 API를 사용, 배달 인원의 위치 정보를 공유

## 가동 방법

- 프론트엔드: wansungmoon_team(node)
- 백엔드: back(node)
- mysql, mongod 실행
- dotenv: REACT_APP_KAKAO_API, REACT_APP_KAKAO_JSKEY

## 1. 팀원 구성

- 팀장: 방지완
- 팀원: 김강문, 박성민

## 2. 역할 분배

### 공통

- 피그마 UI 초안 작성 및 공통적으로 사용하는 컴포넌트 제작

### 김강문: 프론트엔드/백엔드

#### 주문 내역

- wansungmoon_team/src/Components/OrderListTwo/index
- back/controllers/orderList/index
- back/qureies/sequelize/orderList/getOrderList
- wansungmoon_team/src/hooks/orderList/userorderList

#### 주문 상세 페이지

- wansungmoon_team/src/Components/ProductDetail/body
- wansungmoon_team/src/Components/ProductDetail/index
- back/qureies/sequelize/orderList/detail/getOrderListDetail
- wansungmoon_team/src/hooks/orderList/userorderListDetail

#### 공통 컴포넌트 전반 제작, 지도 api 이용

- wansungmoon_team/src/Components/BottomIcons
- wansungmoon_team/src/Components/Public/BoldLine
- wansungmoon_team/src/Components/Public/Button
- wansungmoon_team/src/Components/Public/CenterBody
- wansungmoon_team/src/Components/Public/CheckBox
- wansungmoon_team/src/Components/Public/dropDown
- wansungmoon_team/src/Components/Public/ImgModal
- wansungmoon_team/src/Components/Public/LongButton
- wansungmoon_team/src/Components/Public/checkBox
- wansungmoon_team/src/Components/Public/clickButton
- wansungmoon_team/src/Components/Public/PictureBox
- wansungmoon_team/src/Components/Public/ProductInfoItem
- wansungmoon_team/src/Components/Public/TextArea
- wansungmoon_team/src/Components/Public/Footer
- wansungmoon_team/src/Components/Public/Header(로고는 다른 조원이 다른 폴더에 조원이 만들었다.)
- wansungmoon_team/src/Components/Public/kakaoMapLocationGetter

#### 실시간 배송 추적 기능(delivery, locationCheck)

백엔드의 router

- back/controllers/delivery
- back/controllers/locationCheck

배달원의 물품 리스트페이지(프런트 컴포넌트는 다른 조원이 제작)

- wansungmoon_team/src/Components/Delivery/index
- back/services/dellivery/getDeliveryProductList
- back/querires/sequelize/locationSend
- wansungmoon_team/src/hooks/delivery/useDeliveryList

배달원의 물품 리스트페이지(위치 정보 서버로 전달)

- back/querires/sequelize/location/locationSend
- back/queries/mongoose/location/locationSend
- back/querires/sequelize/location/locationSendStateUpdate
- back/services/delivery/locationSend
- wansungmoon_team/src/hooks/delivery/useLocationSend

배달원의 물품 상세 페이지(프런트 컴포넌트는 다른 조원이 제작)

- wansungmoon_team/src/Components/DeliveryDetail/index(컴포넌트는 다른 조원이 제작해둔 것 사용)
- back/queries/sequelize/location/detail/getDeliveryDetail
- back/services/delivery/detail/getDeliveryDetail
- wansungmoon_team/src/hooks/delivery/useDeliveryDetail

배달원의 물품 상세 페이지(배달완료 요청)

- back/queries/sequelize/location/detail/postDeliveryComplete
- back/services/delivery/detail/postDeliveryComplete
- wansungmoon_team/src/hooks/delivery/useDeliveryComplete

고객의 택배 위치 체크(프런트, 백)

- wansungmoon_team/src/Components/LocationCheck
- back/queries/mongoose/location/getLocation
- back/services/locationCheck/getLocation
- wansungmoon_team/src/hooks/locationCheck/useLog
- back/queries/sequelize/location/detail/getFixedLocation
- back/services/locationCheck/getFixedLocation
- wansungmoon_team/src/hooks/locationCheck/useFixed

#### 시퀄라이즈 모델 제작, 몽고DB 환경 구축

- back/models(프로젝트 중 팀원이 일부 수정)

#### 상품리스트, 메인페이지

백엔드의 라우터(다른 팀원이 추후 /uploadpage 경로 추가)

- back/controllers/Category

메인페이지(컴포넌트는 다른조원이)

- wansungmoon_team/src/Components/Main/Body/index
- back/sequelize/category/getCategory
- back/service/category/getCategory
- wansungmoon_team/src/hooks/category/useCategory

카테고리 상품 리스트(프런트, 백)

- wansungmoon_team/src/Components/ProductListPage/Comp
- wansungmoon_team/src/Components/ProductListPage/index
- back/sequelize/product/getCateProduct
- back/category/getProduct
- wansungmoon_team/src/hooks/category/useCateProduct

#### 상품상세 페이지

백엔드의 라우터

- back/controllers/productInfo

상품상세 페이지(프런트, 백)

- wansungmoon_team/src/Components/ProductDeatil/body
- wansungmoon_team/src/Components/ProductDetail/index
- back/product/getProductDetail
- back/sequelize/product/getProductDeatil
- wansungmoon_team/src/hooks/product/useProductDetail

## 스택

### Front

<div style="disply:flex">
<div style="display:flex; justify-content:center; width:5rem; padding:0.5rem; border-radius:0.5rem; background-color:black">
<img src="./readme_src/wordmark_dark.svg" />
</div>
</div>
- React, typescript 환경에서 개발

- axios, react-kakao-map, react-router-dom, tailwindcss, recoil 라이브러리 사용

- 카카오 로그인 API, 카카오 지도 API

### Backend

- typescript, nodeJS

- mysql2, cors, mongoose, multer, express-session, session-file-store 라이브러리 사용

### DATABASE

- 회원 정보, 게시글 등 정보 전반을 저장하기 위해 mysql 사용
- 실시간 위치 추적 로그를 위해 mongoDB 사용

### 협업 툴

- discord, 카카오톡, github

- <a href="https://docs.google.com/spreadsheets/d/1YYTHFA4z5n_9RmOORPQNLY4iAA3rs3uAcLll98YYpOQ/edit?gid=1151140447#gid=1151140447">구글 스프레드시트</a>: 진행사항 체크리스트, 이슈 체크리스트, api 문서 작성

- <a href="https://drive.google.com/drive/folders/16peHCoF_gTmYik9AmuTj2WVmXGPeQQDG">구글 공유 드라이브</a>: 스크럼 및 회의록, 피드백 사항 문서 저장

- <a href="https://www.figma.com/design/lhPuCmiYz7lx87LLq2kwbA/team_wansungmun?node-id=0-1">디자인: </a> 피그마를 통해 UI 초안 작성

- <a href="https://app.diagrams.net/#G18p2nr8EsjUGMysP9U5TyHFSIbiR54iRz#%7B%22pageId%22%3A%22R2lEEEUBdFMjLlhIrx00%22%7D">drawio ERD</a>

- <a href="https://app.diagrams.net/#G1keKKyQTy96aBUscvoXCxPwICgn1bU4Yb">drawio sequence diagram</a>

- <a href="https://app.diagrams.net/#G1NAZse4vY_8-I-1zBIkdxO8yBdIjG28Py">drawio flowchart</a>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간: 2024.07.09 ~ 2024.07.31
- RND 및 설계 단계: 07.09 ~ 07.14
- 기능 구현: 07.15 ~ 07.31

### 작업 관리

- 설계 기간동안 외부 API나 기존에 쓰지 못했던 기술에 대해 중점적으로 연습 및 연구

- 작업동안 일간 스크럼을 통해 전일 작업 내용 공유, 금일 작업 내용 결정

- 스크럼 및 회의록 기록, 일정 체크리스트를 통해 전체적인 일정 진척도를 파악하고 작업의 우선순위를 결정해서 필수적인 기능 위주로 구현할 수 있도록 함

## 5. 미구현 기능

- 관리자 페이지 백엔드
- 채팅 기능
- 검색 기능
- 각 유저별 주소록 저장 및 열람
- 리뷰 작성 페이지
- 신고 페이지
- 찜 목록 기능
- 포인트 충전 기능
- 회원 정보 수정
- 게시글 수정 기능

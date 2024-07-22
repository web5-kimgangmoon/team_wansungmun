import Dropdown from "../Public/Body/Dropdown";
import MainBox from "./MainBox";
import MainList from "./MainList";
import MultipleRows from "./Slide";

interface IProps {}

const Main = () => {
  const titleArr = [
    "인기매물",
    "디지털기기",
    "가구/인테리어",
    "유아동",
    "여성의류",
    "여성잡화",
    "남성패션/잡화",
    "생활가전",
    "생활/주방",
    "스포츠/레저",
    "취미/게임/음반",
    "뷰티/미용",
    "식물",
    "가공식품",
    "건강기능식품",
    "반려동물용품",
    "티켓/교환권",
    "도서",
    "유아도서",
    "기타 중고물품",
    "삽니다",
  ];
  return (
    <div className="container">
      <Dropdown name="address" defaultStr="주소설정" options={[["강동구 천호동", "강동구 천호동"]]} />
      <div className="mt-2 mb-2">
        <input type="text" placeholder="검색어를 입력해주세요." className="border w-full" />
      </div>
      {/* <MultipleRows /> */}
      <MainList titleArr={titleArr} />
    </div>
  );
};

export default Main;

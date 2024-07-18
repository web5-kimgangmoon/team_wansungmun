import useMainPage from "./hook/useMainPage";
import MainList from "./MainList";

interface IProps {
  // titleArr: string[];
}

const MainBox = ({}: IProps) => {
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
  const { mainPage, setMainPage } = useMainPage();
  const pageTitleArr = titleArr.slice((mainPage - 1) * 15, mainPage * 15);
  const MainListArr = [];
  for (let i = 1; i < 4; i++) {
    MainListArr.push(
      <MainList titleArr={pageTitleArr.filter((_, index) => (i - 1) * 5 - 1 < index && index < i * 5)} />
    );
  }
  return (
    <div>
      {MainListArr.map((item) => item)}
      <div
        className="flex justify-center"
        onClick={() => {
          mainPage === 1 ? setMainPage(2) : setMainPage(1);
        }}
      >
        <div className="bg-cusGray w-7 h-3 rounded-xl flex justify-center items-center">
          <button className="bg-black w-1 h-1 rounded-full"></button>
          <div className="w-1"></div>
          <button className="bg-black w-1 h-1 rounded-full"></button>
        </div>
      </div>
    </div>
  );
};

export default MainBox;

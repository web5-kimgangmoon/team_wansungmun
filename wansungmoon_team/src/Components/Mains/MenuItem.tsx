import { useState } from "react";

interface IProps {}

const MenuItem = () => {
  const [title, setTitle] = useState([
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
  ]);

  return (
    <div>
      <div className="bg-cusGray w-[3rem] h-[3rem] rounded-xl"></div>
      <div className="text-xs text-center font-bold">
        {title.map(function (i) {
          return i;
        })}
      </div>
    </div>
  );
};

export default MenuItem;

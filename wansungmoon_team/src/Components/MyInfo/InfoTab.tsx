import { useState } from "react";
import MyInfo from "./MyInfo";
import Box from "./img/box.png";

interface IProps {}

const InfoTab = () => {
  const [InfoMenuArr, setInfoMenuArr] = useState([
    "판매 상품 조회",
    "후기 조회",
    "주소 관리",
    "고객 지원",
    "설정",
    "포인트 충전",
    "배송시작하기",
  ]);

  return (
    <div className="flex justify-center">
      <img src={Box} alt="" className="w-[2rem] mx-6 my-4" />
      <div className="flex-1 mx-2 my-4 font-black text-large">
        {InfoMenuArr[0]}
        {/* {InfoMenuArr.map((InfoMenu) => (
          <div>{InfoMenu}</div>
        ))} */}
      </div>
    </div>
  );
};

export default InfoTab;

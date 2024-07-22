import { useState } from "react";
import MyInfo from "./MyInfo";
import Box from "./img/box.png";
import Star from "./img/star.png";
import list from "./img/list.png";
import Phone from "./img/phone.png";
import Gear from "./img/gear.png";
import Card from "./img/Card.png";
import Car from "./img/car.png";

interface IProps {}

const InfoTab = () => {
  const [InfoMenuArr, setInfoMenuArr] = useState([
    [Box, "상품 판매하기"],
    [Box, "판매 상품 조회"],
    [Star, "후기 조회"],
    [list, "주소 관리"],
    [Phone, "고객 지원"],
    [Gear, "설정"],
    [Card, "포인트 충전"],
    [Car, "배송시작하기"],
  ]);

  return (
    <div className="flex flex-col items-center">
      {InfoMenuArr.map((InfoMenu) => (
        <div className="flex w-full px-2 py-4 font-black text-large">
          {/* <div>
            <img src={Box} alt="" className="w-[2rem]" />
          </div> */}
          <div>
            {/* {InfoMenuArr[0]} */}

            <div>{InfoMenu[0]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoTab;

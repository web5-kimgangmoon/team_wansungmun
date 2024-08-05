import Box from "../img/box.png";
import Star from "../img/star.png";
import list from "../img/list.png";
import Phone from "../img/phone.png";
import Gear from "../img/gear.png";
import Card from "../img/Card.png";
import Car from "../img/car.png";
import TabBtn from "./TabBtn";
import { Link } from "react-router-dom";

const InfoTab = () => {
  // const [InfoMenuArr, setInfoMenuArr] = useState([
  //   ["상품 판매하기"],
  //   ["판매 상품 조회"],
  //   ["후기 조회"],
  //   ["주소 관리"],
  //   ["고객 지원"],
  //   ["설정"],
  //   ["포인트 충전"],
  //   ["배송시작하기"],
  // ]);

  // const [infoImg, setInfoImgArr] = useState([
  //   [`${(<img src={Box}></img>)}`],
  //   [`${(<img src={Box}></img>)}`],
  //   [`${(<img src={Star}></img>)}`],
  //   [`${(<img src={list}></img>)}`],
  //   [`${(<img src={Phone}></img>)}`],
  //   [`${(<img src={Gear}></img>)}`],
  //   [`${(<img src={Card}></img>)}`],
  //   [`${(<img src={Car}></img>)}`],
  // ]);

  return (
    <div className="flex flex-col items-center py-4 px-2">
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={Box} alt="" className="w-[1.5rem]" />
        </div>
        <Link to="/productupload">
          <TabBtn>상품판매하기</TabBtn>
        </Link>
      </div>
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={Box} alt="" className="w-[1.5rem]" />
        </div>
        <Link to="/orderListSelling">
          <TabBtn>거래 내역 조회</TabBtn>
        </Link>
      </div>
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={Star} alt="" className="w-[1.5rem]" />
        </div>
        <Link to="/reviewHistory">
          <TabBtn>후기 조회</TabBtn>
        </Link>
      </div>
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={list} alt="" className="w-[1.5rem]" />
        </div>
        <TabBtn>주소 관리</TabBtn>
      </div>
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={Phone} alt="" className="w-[1.5rem]" />
        </div>
        <TabBtn>고객 지원</TabBtn>
      </div>
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={Gear} alt="" className="w-[1.5rem]" />
        </div>
        <TabBtn>설정</TabBtn>
      </div>
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={Card} alt="" className="w-[1.5rem]" />
        </div>
        <Link to={"/pointcharge"}>
          <TabBtn>포인트 충전</TabBtn>
        </Link>
      </div>
      <div className="flex w-full px-2 py-4 font-black text-large">
        <div>
          <img src={Car} alt="" className="w-[1.5rem]" />
        </div>
        <Link to={"/delivery"}>
          <TabBtn>배송시작하기</TabBtn>
        </Link>
      </div>
    </div>
  );
};

export default InfoTab;

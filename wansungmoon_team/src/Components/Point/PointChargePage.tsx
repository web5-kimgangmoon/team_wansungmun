import { useState } from "react";
import PointSelect from "./PointSelect";
import LongButton from "../Public/Body/LongButton";

interface IProps {}

const PointChargePage = () => {
  const [bgColor, setBgcolor] = useState<number>(-1);
  const [isClick, setIsClick] = useState(true);
  const ptprArr = [
    [10000, 11000],
    [20000, 21000],
    [30000, 31000],
    [40000, 41000],
    [50000, 51000],
    [100000, 101000],
    [500000, 501000],
    [1000000, 1001000],
  ];
  //   console.log(bgColor);
  return (
    <div>
      <div className="px-10 py-5 bg-blueButton-long rounded text-white">
        <div className="font-bold p-2">내가 보유중인 포인트</div>
        <div className="text-2xl font-bold p-2">0 원</div>
      </div>
      <div>
        <div className="flex justify-center py-6 text-xl font-bold">충전 단위 선택</div>
        <div className="px-5 font-bold">
          {ptprArr.map((item, idx) => (
            <PointSelect
              key={idx}
              bgColor={idx === bgColor ? "blue" : "white"}
              onclick={() => setBgcolor(idx)}
              point={item[0]}
              price={item[1]}
            />
          ))}
        </div>
      </div>
      <div className="p-5">
        <LongButton textColor="white" bgColor="blue">
          충전하기
        </LongButton>
      </div>
    </div>
  );
};

export default PointChargePage;

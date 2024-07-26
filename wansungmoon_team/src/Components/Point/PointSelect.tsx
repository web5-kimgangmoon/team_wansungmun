import { MouseEvent } from "react";

type BgColorTy = "blue" | "white";

interface IProps {
  bgColor: BgColorTy;
  point: number;
  price: number;
  onclick: (e: MouseEvent<HTMLDivElement>) => void;
}

const PointSelect = ({ bgColor, onclick, point, price }: IProps) => {
  const bgColorStorage = {
    white: "bg-white",
    blue: "bg-blueButton-default",
  };
  return (
    <div className={`flex justify-between border-b border-cusGray py-2 ${bgColorStorage[bgColor]}`} onClick={onclick}>
      <div className="px-3">{point} 포인트</div>
      <div className="px-3">{price} 원</div>
    </div>
  );
};

export default PointSelect;

import Svg from "../../../svgs/Star";
import { MouseEvent } from "react";
interface IProps {
  leftColor: "yellow" | "gray";
  rightColor: "yellow" | "gray";
  leftOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
  rightOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Star = ({ leftColor, rightColor, leftOnClick, rightOnClick }: IProps) => {
  const colorPalete = {
    yellow: "text-yellow",
    gray: "text-cusGray",
  };
  return (
    <div className="flex">
      <div className="w-6 h-12 overflow-hidden relative">
        <div
          onClick={leftOnClick}
          className={`w-12 h-full absolute top-0 left-0 ${colorPalete[leftColor]}`}
        >
          <Svg />
        </div>
      </div>
      <div className="w-6 h-12 overflow-hidden relative">
        <div
          onClick={rightOnClick}
          className={`w-12 h-full absolute top-0 right-0 ${colorPalete[rightColor]}`}
        >
          <Svg />
        </div>
      </div>
    </div>
  );
};

export default Star;

import Svg from "../../../svgs/Star";
import { MouseEvent } from "react";
interface IProps {
  leftColor: "yellow" | "gray";
  rightColor: "yellow" | "gray";
  starWidth?: "3" | "6" | "12";
  isNoborder?: boolean;
  leftOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
  rightOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Star = ({
  starWidth = "12",
  leftColor,
  rightColor,
  isNoborder = false,
  leftOnClick,
  rightOnClick,
}: IProps) => {
  const colorPalete = {
    yellow: "text-yellow",
    gray: "text-cusGray",
  };
  const starWidthStorage = {
    "3": ["w-1.5 h-3", "w-3"],
    "6": ["w-3 h-6", "w-6"],
    "12": ["w-6 h-12", "w-12"],
  };
  return (
    <div className="flex">
      <div
        className={`${starWidthStorage[starWidth][0]} overflow-hidden relative`}
      >
        <div
          onClick={leftOnClick}
          className={`${starWidthStorage[starWidth][1]} h-full absolute top-0 left-0 ${colorPalete[leftColor]}`}
        >
          <Svg isNoBorder={isNoborder} />
        </div>
      </div>
      <div
        className={`${starWidthStorage[starWidth][0]} overflow-hidden relative`}
      >
        <div
          onClick={rightOnClick}
          className={`${starWidthStorage[starWidth][1]} h-full absolute top-0 right-0 ${colorPalete[rightColor]}`}
        >
          <Svg isNoBorder={isNoborder} />
        </div>
      </div>
    </div>
  );
};

export default Star;

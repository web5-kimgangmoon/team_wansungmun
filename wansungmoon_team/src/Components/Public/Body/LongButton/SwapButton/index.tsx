import LongButton from "..";
import { MouseEvent } from "react";

interface IProps {
  btnA: string;
  btnB: string;
  isSwapped: boolean;
  swapClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const SwapButton = ({ btnA, btnB, isSwapped, swapClick }: IProps) => {
  return (
    <div
      className={`flex bg-cusGray rounded-lg items-center${
        isSwapped ? " flex-row-reverse" : ""
      }`}
      onClick={swapClick}
    >
      <div className="grow">
        <LongButton textColor="white" bgColor="blue">
          {isSwapped ? btnB : btnA}
        </LongButton>
      </div>
      <div className="grow text-center text-sm font-bold">
        {isSwapped ? btnA : btnB}
      </div>
    </div>
  );
};

export default SwapButton;

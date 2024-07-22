import { MouseEvent } from "react";
import Svg from "../../../../svgs/XShape";
import Button from "../Button";

export interface ITopData {
  state?: "trading" | "traded" | "selling" | "reviewed";
  date?: Date;
}

export interface IProps extends ITopData {
  onClickClose?: (e: MouseEvent<HTMLDivElement>) => void;
}

const TopBox = ({ date, state = "trading", onClickClose }: IProps) => {
  const buttonStorage = {
    trading: (
      <Button bgColor="gray" textColor="black" isLong={true}>
        거래중
      </Button>
    ),
    traded: (
      <Button bgColor="gray" textColor="black" isLong={true}>
        거래완료
      </Button>
    ),
    selling: (
      <Button bgColor="orange" textColor="black" isLong={true}>
        판매중
      </Button>
    ),
    reviewed: (
      <Button bgColor="green" textColor="black" isLong={true}>
        후기받음
      </Button>
    ),
  };

  let dateString = date
    ? `${date.getFullYear().toString().slice(2)}.${
        date.getMonth() + 1
      }.${date.getDate()} ${date.getHours() > 11 ? "오후" : "오전"} ${
        date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
      }:${date.getMinutes().toString().padStart(2, "0")}`
    : "";
  return (
    <div className="flex">
      <div className="py-3 flex items-center">{buttonStorage[state]}</div>
      <div className="pl-2 grow text-sm text-etcWord flex items-center">
        {dateString}
      </div>
      <div className="p-1 w-8 flex items-center" onClick={onClickClose}>
        {Svg}
      </div>
    </div>
  );
};

export default TopBox;

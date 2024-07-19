import { MouseEvent } from "react";
import Star from "../../../../../svgs/Star";
import XShape from "../../../../../svgs/XShape";
import DinamicHeart from "../../../../../svgs/DinamicHeart";
import PressButtonLine from "./PressButtonLine";
import StateButtonLine from "./StateButtonLine";

interface IPressButton {
  tradeListPath: string;
  move?: "tradeCancel" | "tradeChange" | "reviewComplete" | "locationCheck";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface IStateButton {
  isDirectTrade?: boolean;
  state?: "trading" | "traded" | "selling";
}

interface IProps {
  title: string;
  score: number;
  reviewCount: number;
  writer: string;
  src: string;
  isHasTop?: boolean;
  isHeartFull?: boolean;
  pressBtnInfo?: IPressButton;
  stateBtnInfo?: IStateButton;
  onClickClose?: (e: MouseEvent<HTMLDivElement>) => void;
  onClickHeart?: (e: MouseEvent<HTMLDivElement>) => void;
}

const BottomBox = ({
  title,
  score,
  reviewCount,
  writer,
  src,
  pressBtnInfo,
  stateBtnInfo,
  isHasTop = false,
  isHeartFull,
  onClickClose,
  onClickHeart,
}: IProps) => {
  return (
    <div className="flex h-24">
      <div className="w-24 h-24 border">
        <img src={src} alt="사진" className="w-full h-full" />
      </div>
      <div className="flex flex-col pl-2 grow max-h-full gap-y-2.5">
        <div className="text-base font-bold">{title}</div>
        <div className="flex items-center">
          <div className="text-yellow w-4">
            <Star isNoBorder={true} />
          </div>
          <div className="pl-1 flex items-center font-bold">
            <span className="text-sm">{`${score}`}</span>
            <span className="text-sm text-etcWord">{`(${reviewCount})`}</span>
          </div>
          <div className="pl-1 text-base font-bold">{writer}</div>
        </div>
        <div className="grow flex items-end">
          {pressBtnInfo ? (
            <PressButtonLine
              tradeListPath={pressBtnInfo.tradeListPath}
              move={pressBtnInfo.move}
              onClick={pressBtnInfo.onClick}
            />
          ) : (
            <StateButtonLine
              state={stateBtnInfo?.state}
              isDirectTrade={stateBtnInfo?.isDirectTrade}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-8 px-1" onClick={onClickClose}>
          {isHasTop ? "" : XShape}
        </div>
        <div className="grow flex justify-center items-end">
          <div
            className={`w-6 ${isHeartFull ? "text-red" : ""}`}
            onClick={onClickHeart}
          >
            {isHeartFull === undefined ? (
              ""
            ) : (
              <DinamicHeart isFull={isHeartFull} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBox;

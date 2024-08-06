import TopBox from "./TopBox";
import BottomBox from "./BottomBox/index";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";

import { ITopData } from "./TopBox";
import { IBottomData } from "./BottomBox/index";

// export interface IPressButton {
//   tradeListPath: string;
//   move?:
//     | "tradeCancel"
//     | "tradeChange"
//     | "reviewComplete"
//     | "locationCheck"
//     | "reviewWrite";
//   onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
// }

// export interface IStateButton {
//   isDirectTrade?: boolean;
//   state?: "trading" | "traded" | "selling";
// }

// export interface IBottomData {
//   title: string;
//   score: number;
//   reviewCount: number;
//   writer: string;
//   src: string;
//   isHeartFull?: boolean;
//   pressBtnInfo?: IPressButton;
//   stateBtnInfo?: IStateButton;
//   onClickHeart?: (e: MouseEvent<HTMLDivElement>) => void;
// }

// export interface ITopData {
//   state?: "trading" | "traded" | "selling" | "reviewed";
//   date?: Date;
// }

export interface IProps {
  topData?: ITopData;
  bottomData: IBottomData;
  path?: string;
  onClickClose?: (e: MouseEvent<HTMLDivElement>) => void;
  onClickAll?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Item = ({
  path,
  topData,
  bottomData,
  onClickClose,
  onClickAll,
}: IProps) => {
  const topBox = topData ? (
    <TopBox
      date={topData?.date}
      onClickClose={onClickClose}
      state={topData?.state}
    />
  ) : (
    ""
  );
  const bottomBox = (
    <BottomBox
      title={bottomData.title}
      score={bottomData.score}
      reviewCount={bottomData.reviewCount}
      writer={bottomData.writer}
      src={bottomData.src}
      isHeartFull={bottomData.isHeartFull}
      pressBtnInfo={bottomData.pressBtnInfo}
      stateBtnInfo={bottomData.stateBtnInfo}
      onClickHeart={bottomData.onClickHeart}
      onClickClose={onClickClose}
      isHasTop={topBox ? true : false}
    />
  );
  const className = "py-2 border-b";
  return path ? (
    <div className={className}>
      <Link to={path}>
        {topBox}
        {bottomBox}
      </Link>
    </div>
  ) : (
    <div onClick={onClickAll} className={className}>
      {topBox}
      {bottomBox}
    </div>
  );
};

export default Item;

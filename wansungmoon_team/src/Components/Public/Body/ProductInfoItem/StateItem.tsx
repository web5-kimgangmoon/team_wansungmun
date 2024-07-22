import Item, { IProps as IItem } from ".";
import { IStateTy } from "./BottomBox/StateButtonLine";
import { MouseEvent } from "react";

export interface IProps {
  title: string;
  score: number;
  reviewCount: number;
  writer: string;
  src: string;
  state?: IStateTy;
  isDirect?: boolean;
  isHeartFull?: boolean;
  path?: string;
  onClickAll?: (e: MouseEvent<HTMLDivElement>) => void;
  onClickClose?: (e: MouseEvent<HTMLDivElement>) => void;
}

const StateItem = ({
  title,
  reviewCount,
  writer,
  score,
  src,
  state,
  isDirect,
  isHeartFull,
  path,
  onClickAll,
  onClickClose,
}: IProps) => {
  return (
    <Item
      bottomData={{
        title: title,
        score: score,
        reviewCount: reviewCount,
        writer: writer,
        src: src,
        stateBtnInfo: { state: state, isDirectTrade: isDirect },
        isHeartFull: isHeartFull,
      }}
      path={path}
      onClickAll={onClickAll}
      onClickClose={onClickClose}
    />
  );
};

export default StateItem;

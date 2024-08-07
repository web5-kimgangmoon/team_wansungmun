import { ReactNode } from "react";

interface IProps {
  index: number;
  title: string;
  isRecommend: boolean;
  Svg: ReactNode;
  color: "red" | "blue";
  onClickRecommend: () => void;
}

const RecommendItem = ({
  index,
  title,
  isRecommend,
  Svg,
  color,
  onClickRecommend,
}: IProps) => {
  const colorPalete = {
    red: "text-redButton",
    blue: "text-blueButton-default",
  };
  return (
    <div className="flex" onClick={onClickRecommend}>
      <div className="p-2 bg-cusGray min-w-2 min-h-2 text-xs text-center font-bold">
        {index}
      </div>
      <div className="flex px-2 grow text-sm justify-start items-center">
        {title}
      </div>
      <div
        className={`w-7 ${isRecommend ? colorPalete[color] : "text-cusGray"}`}
      >
        {Svg}
      </div>
    </div>
  );
};

export default RecommendItem;

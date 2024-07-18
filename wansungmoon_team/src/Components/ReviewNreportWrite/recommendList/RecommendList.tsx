import { ReactNode } from "react";
import RecommendItem from "./RecommendItem";

interface IProps {
  recommendList: string[];
  recommendIndex: number;
  Svg: ReactNode;
  color?: "red" | "blue";
  setRecommendIndex: (index: number) => void;
}

const RecommendList = ({
  recommendIndex,
  recommendList,
  Svg,
  color = "blue",
  setRecommendIndex,
}: IProps) => {
  return (
    <div className="flex flex-col py-2 gap-2">
      {recommendList.map((item, index) => (
        <RecommendItem
          key={index}
          index={index + 1}
          title={item}
          isRecommend={index === recommendIndex ? true : false}
          onClickRecommend={
            recommendIndex === index
              ? () => setRecommendIndex(-1)
              : () => setRecommendIndex(index)
          }
          color={color}
          Svg={Svg}
        />
      ))}
    </div>
  );
};

export default RecommendList;

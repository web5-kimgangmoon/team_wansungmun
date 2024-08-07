import Star from "./Star";
import { MouseEvent } from "react";
interface IProps {
  score: number;
  isNoBorder?: boolean;
  starWidth?: "3" | "6" | "12";
  setScore?: (index: number) => void;
}

const Stars = ({
  score,
  isNoBorder = false,
  starWidth = "12",
  setScore,
}: IProps) => {
  const palete: Array<["yellow" | "gray", "yellow" | "gray"]> = [];
  for (let i = 0; i < 5; i++) {
    palete.push([
      `${i * 2 < score ? "yellow" : "gray"}`,
      `${i * 2 + 1 < score ? "yellow" : "gray"}`,
    ]);
  }
  return (
    <div className="flex">
      {palete.map((item, index) => (
        <Star
          key={index}
          leftColor={item[0]}
          rightColor={item[1]}
          leftOnClick={
            setScore
              ? (e: MouseEvent<HTMLDivElement>) => {
                  setScore(index * 2 + 1);
                }
              : undefined
          }
          rightOnClick={
            setScore
              ? (e: MouseEvent<HTMLDivElement>) => {
                  setScore((index + 1) * 2);
                }
              : undefined
          }
          isNoborder={isNoBorder}
          starWidth={starWidth}
        />
      ))}
    </div>
  );
};

export default Stars;

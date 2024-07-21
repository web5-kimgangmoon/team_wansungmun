import BoldLine from "../Public/Body/BoldLine";
import { MouseEvent } from "react";
import Stars from "../ReviewNreportWrite/Stars/Stars";
import Button from "../Public/Body/Button";
import { Link } from "react-router-dom";
interface IProps {
  onclickEvent?: (e: MouseEvent<HTMLButtonElement>) => void;
  detailPath: string;
  srcs?: string[];
  title: string;
  score: number;
  content: string;
  date: Date;
}

const Item = ({
  detailPath,
  srcs = [],
  title,
  score,
  content,
  date,
  onclickEvent,
}: IProps) => {
  return (
    <div className="py-1 border-b">
      <BoldLine>{title}</BoldLine>
      <div className="flex gap-2">
        <div className="flex items-center py-1">
          <Stars score={score} starWidth="3" isNoBorder={true} />
        </div>
        <div className="flex items-center text-xs text-etcWord font-bold">{`${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate().toString().padStart(2, "0")}`}</div>
      </div>
      <div className="text-sm pb-1">{content}</div>
      <div className="flex justify-center gap-2">
        {srcs.map((item) =>
          item !== "" ? (
            <div className="sm:w-12 w-24">
              <img src={item} className="w-full" />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="flex gap-2">
        <Link to={detailPath}>
          <Button bgColor="white" textColor="black" isBorder={true}>
            거래상세
          </Button>
        </Link>
        <div>
          <Button bgColor="red" textColor="white" onClick={onclickEvent}>
            후기삭제
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Item;

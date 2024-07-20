import { Link } from "react-router-dom";
import Button from "../../Button";
import { MouseEvent } from "react";

export interface IProps {
  tradeListPath: string;
  move?:
    | "tradeCancel"
    | "tradeChange"
    | "reviewComplete"
    | "locationCheck"
    | "reviewWrite"
    | "chating";

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const PressButtonLine = ({
  move = "tradeCancel",
  tradeListPath,
  onClick,
}: IProps) => {
  const pressButtonStorage = {
    tradeCancel: (
      <Button bgColor="red" textColor="white" onClick={onClick}>
        거래취소
      </Button>
    ),
    tradeChange: (
      <Button bgColor="blue" textColor="white" onClick={onClick}>
        거래글수정
      </Button>
    ),
    reviewComplete: (
      <Button bgColor="gray" textColor="black" onClick={onClick}>
        후기작성완료
      </Button>
    ),
    reviewWrite: (
      <Button bgColor="blue" textColor="white" onClick={onClick}>
        후기쓰기
      </Button>
    ),
    locationCheck: (
      <Button bgColor="blue" textColor="white" onClick={onClick}>
        위치확인
      </Button>
    ),
    chating: (
      <Button bgColor="blue" textColor="white" onClick={onClick}>
        채딩하기
      </Button>
    ),
  };
  return (
    <div className="flex gap-1">
      <Link to={tradeListPath}>
        <Button bgColor="white" textColor="black" isBorder={true}>
          거래상세
        </Button>
      </Link>
      <div>{pressButtonStorage[move]}</div>
    </div>
  );
};

export default PressButtonLine;

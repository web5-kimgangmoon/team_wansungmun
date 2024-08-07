import board from "../../../../svgs/clipboard-outline";
import check from "../../../../svgs/checkmark-outline";
import SvgWrapper from "./SvgWrapper";
import { Link } from "react-router-dom";

interface IProps {
  isInActive?: boolean;
  className?: string;
  checkClassName?: string;
  positionClass?: string;
  fontClassName?: string;
  path?: string;
}

const OrderList = ({
  isInActive = false,
  className = "",
  positionClass = "",
  checkClassName = "",
  fontClassName = "",
  path = "",
}: IProps): JSX.Element => {
  return (
    <Link to={path} className="flex flex-col grow">
      <div className={"m-auto flex relative w-max"}>
        <SvgWrapper className={className} isInActive={isInActive} svg={board} />
        <SvgWrapper
          className={checkClassName}
          positionClass={positionClass + " absolute "}
          isInActive={isInActive}
          svg={check}
        />
      </div>
      <div className={fontClassName}>주문내역</div>
    </Link>
  );
};

export default OrderList;

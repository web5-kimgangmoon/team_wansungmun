import { MouseEvent } from "react";
import { Link } from "react-router-dom";

interface IPros {
  title: string;
  to: string;
  closeOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const ModalItem = ({ title, to, closeOnClick }: IPros) => {
  return (
    <div>
      {to === "닫기" ? (
        <div onClick={closeOnClick} className="p-2 border-b border-cusGray">
          {title}
        </div>
      ) : (
        <Link to={to}>
          <div className="p-2 border-b border-cusGray">{title}</div>
        </Link>
      )}
    </div>
  );
};

export default ModalItem;

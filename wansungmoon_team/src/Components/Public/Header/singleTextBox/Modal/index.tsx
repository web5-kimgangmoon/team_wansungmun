import ModalItem from "./item";
import { MouseEvent } from "react";

interface IProps {
  titleNPathArr: [string, string][];
  isHidden: boolean;
  closeOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const ModalBox = ({ titleNPathArr, isHidden, closeOnClick }: IProps) => {
  return (
    <div className="absolute top-0 left-0 w-full px-12 z-20" hidden={isHidden}>
      <div className="border px-2 bg-white">
        {titleNPathArr.map((item, index) => (
          <ModalItem key={index} title={item[0]} to={item[1]} />
        ))}
        <ModalItem
          key={titleNPathArr.length}
          title={"닫기"}
          to={"닫기"}
          closeOnClick={closeOnClick}
        />
      </div>
    </div>
  );
};

export default ModalBox;

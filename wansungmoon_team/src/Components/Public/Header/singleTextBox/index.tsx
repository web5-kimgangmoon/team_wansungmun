import { MouseEvent } from "react";
import Svg from "../../../../svgs/Chevron-down";
import ModalBox from "./Modal";

interface IProps {
  children: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  isOpenModal?: boolean;
  titleNPath?: [string, string][];
  closeOnClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const SingleTextBox = ({
  children,
  onClick,
  isOpenModal,
  titleNPath = [["", ""]],
  closeOnClick,
}: IProps): JSX.Element => {
  return (
    <div className="container py-3 flex justify-center">
      <div className="px-8 w-full justify-center flex">
        <div
          className="py-3 w-full text-center border-b border-black font-bold sm:text-xl text-2xl border-b border-black relative flex justify-center"
          onClick={onClick}
        >
          <div>{children}</div>

          <div hidden={isOpenModal === undefined ? true : false}>
            <div className="h-full pl-2 flex items-center">
              <div className="w-4">{Svg}</div>
            </div>
          </div>

          <ModalBox
            titleNPathArr={titleNPath}
            isHidden={isOpenModal ? false : true}
            closeOnClick={closeOnClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleTextBox;

import { ReactNode } from "react";
import Qwer from "./img/qwer.png";

interface IProps {
  children: ReactNode | string;
  src: string;
}

const ProductPageImg = ({ children, src }: IProps) => {
  return (
    <div className="relative flex justify-center px-5">
      <div className="absolute w-full h-full px-6 pt-1">{children}</div>
      <div className="w-full">
        <img src={Qwer} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ProductPageImg;

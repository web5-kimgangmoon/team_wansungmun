import { Link } from "react-router-dom";
import Btn from "../svg/detailBtn.svg";

interface IProps {
  num: number;
  name: string;
  phone: string;
  adrress: string;
}

const DeliveryContent = () => {
  return (
    <div className="flex text-center font-bold items-center bg-blueButton-long rounded mt-1">
      <div className="w-10 flex justify-center">
        <div className="bg-cusGray w-7 rounded">1</div>
      </div>
      <div className="flex-1 flex-col justify-center">
        <div className="flex">
          <div className="flex-1">의자</div>
          <div className="flex-1">010-0323-3242</div>
        </div>
        <div>서울 강동구 올림픽로 776 암사역</div>
      </div>
      <div className="w-5">
        <Link to="/deliverydetail">
          <button className="block w-3 h-3">
            <img src={Btn} alt="" className="w-full h-full" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeliveryContent;

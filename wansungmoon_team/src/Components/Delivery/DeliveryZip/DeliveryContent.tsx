import { Link } from "react-router-dom";
import Btn from "../svg/detailBtn.svg";

export interface IItem {
  name: string;
  phone: string;
  address: string;
  id: number;
  isDeliverying: boolean;
}

export interface IProps extends IItem {
  idx: number;
}

const DeliveryContent = ({
  idx,
  name,
  phone,
  address,
  id,
  isDeliverying,
}: IProps) => {
  return (
    <Link to={`/deliverydetail/${id}`}>
      <div
        className={`flex text-center font-bold items-center rounded mt-1 ${
          isDeliverying ? "bg-blueButton-long" : "bg-greenButton"
        }`}
      >
        <div className="w-10 flex justify-center">
          <div className="bg-cusGray w-7 rounded">{idx}</div>
        </div>
        <div className="flex-1 flex-col justify-center">
          <div className="flex">
            <div className="flex-1">{name}</div>
            <div className="flex-1">{phone}</div>
          </div>
          <div>{address}</div>
        </div>
        <div className="w-5">
          <button className="block w-3 h-3">
            <img src={Btn} alt="" className="w-full h-full" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DeliveryContent;

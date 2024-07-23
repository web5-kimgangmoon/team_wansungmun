import LongButton from "../Public/Body/LongButton";
import CategoryBar from "../CategoryBar/CategoryBar";
import ProductInfo from "./Deal/ProductInfo";
import DealMethod from "./Deal/DealMethod";
import DeliveryAdrress from "./Deal/DeliveryAdrress";
import RequestContent from "./Deal/RequestContent";
import PointPayment from "./Deal/PointPayment";
import PayComplete from "./Modal/PayComplete";
import { Link } from "react-router-dom";

interface IProps {}

const Buy = () => {
  return (
    <div>
      <CategoryBar></CategoryBar>
      <ProductInfo></ProductInfo>
      <DealMethod></DealMethod>
      <DeliveryAdrress></DeliveryAdrress>
      <RequestContent></RequestContent>
      <PointPayment></PointPayment>
      <div className="p-2">
        <PayComplete></PayComplete>
      </div>
    </div>
  );
};

export default Buy;

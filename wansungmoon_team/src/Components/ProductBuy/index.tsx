import LongButton from "../Public/Body/LongButton";
import CategoryBar from "../ProductListPage/CategoryBar/CategoryBar";
import ProductInfo from "./Deal/ProductInfo";
import DealMethod from "./Deal/DealMethod";
import DeliveryAdrress from "./Deal/DeliveryAdrress";
import RequestContent from "./Deal/RequestContent";
import PointPayment from "./Deal/PointPayment";
import PayComplete from "./Modal/PayComplete";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface IProps {}

const Buy = () => {
  const Info = useLocation();
  console.log(Info);
  const content = Info.state.contents;
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

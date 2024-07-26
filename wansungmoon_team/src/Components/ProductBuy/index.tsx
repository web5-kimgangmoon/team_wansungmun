import LongButton from "../Public/Body/LongButton";
import CategoryBar from "../ProductListPage/CategoryBar/CategoryBar";
import ProductInfo from "./Deal/ProductInfo";
import DealMethod from "./Deal/DealMethod";
import DeliveryAdrress from "./Deal/DeliveryAdrress";
import RequestContent from "./Deal/RequestContent";
import PointPayment from "./Deal/PointPayment";
import PayComplete from "./Modal/PayComplete";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface IProps {
  title: string;
  sellerId: number;
  src: string;
  price: number;
  userpoint: number;
  phone: string;
  location: Array<any>;
  point: number;
}

const Buy = () => {
  const info = useLocation();
  console.log(info);
  const content = info.state.contents;
  const title = info.state.title;
  const sellerId = info.state.sellerId;
  const src = info.state.src;
  const price = info.state.price;
  const productId = info.state.productId;
  const [location, setLocation] = useState([]);
  const [userpoint, setUserpoint] = useState(Number);
  const [phone, setPhone] = useState("");
  const [reqContent, setReqContent] = useState("");
  const [locaValue, setLocaValue] = useState("");

  useEffect(() => {
    const ReqInfo = async () => {
      const userInfo = await axios.get("/api/trade/sell_process", {
        withCredentials: true,
      });
      console.log(userInfo);
      console.log(userInfo.data[0].locationList);
      setLocation(userInfo.data[0].locationList);
      setUserpoint(userInfo.data[0].point);
      setPhone(userInfo.data[0].phone_num);
    };
    ReqInfo();
  }, []);

  console.log();

  console.log(location);
  console.log(userpoint);

  return (
    <div>
      <CategoryBar></CategoryBar>
      <ProductInfo src={src} title={title} price={price}></ProductInfo>
      <DealMethod></DealMethod>
      <DeliveryAdrress
        location={location}
        locaValue={locaValue}
        setLocaValue={setLocaValue}
      ></DeliveryAdrress>
      <RequestContent
        reqContent={reqContent}
        setReqContent={setReqContent}
      ></RequestContent>
      <PointPayment point={userpoint} price={price}></PointPayment>
      <div className="p-2">
        <PayComplete
          price={price}
          reqContent={reqContent}
          productId={productId}
          locaValue={locaValue}
          userpoint={userpoint}
        ></PayComplete>
      </div>
    </div>
  );
};

export default Buy;

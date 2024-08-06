// import LongButton from "../Public/Body/LongButton";
import CategoryBar from "../ProductListPage/CategoryBar/CategoryBar";
import ProductInfo from "./Deal/ProductInfo";
import DealMethod from "./Deal/DealMethod";
import DeliveryAdrress from "./Deal/DeliveryAdrress";
import RequestContent from "./Deal/RequestContent";
import PointPayment from "./Deal/PointPayment";
import PayComplete from "./Modal/PayComplete";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// interface IProps {
//   title: string;
//   sellerId: number;
//   src: string;
//   price: number;
//   userpoint: number;
//   phone: string;
//   location: Array<any>;
//   point: number;
//   locaOther: object;
// }

const Buy = () => {
  const info = useLocation();
  console.log(info);
  // const content = info.state.contents;
  const title = info.state.title;
  // const sellerId = info.state.sellerId;
  const src = info.state.src;
  const price = info.state.price;
  const productId = info.state.productId;
  const [userpoint, setUserpoint] = useState<number>(21);
  const [_, setPhone] = useState("");
  const [reqContent, setReqContent] = useState("");

  const [locaValue, setLocaValue] = useState("");
  const [location, setLocation] = useState([]);
  const [detailLoca, setdetailLoca] = useState("");
  const [locaOther, setLocaOther] = useState({});
  const [showLoca, setShowLoca] = useState("");

  // isDBloca: true 면 location_list를 요청으로 보냄
  // isDBloca: false 면 직접 입력한 주소 및 주소, 경도를 직접 요청으로 보내도록

  //24.7.28
  // 주소 정보 관련해서 state값 정리
  // 주소지, 상세주소, lat, lng에 대해서 state 만들고 받아올 수 있도록
  // addaddress 모달창에서 주소 클릭하면 값 변환되게

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
        setDetailLoca={setdetailLoca}
        detailLoca={detailLoca}
        setLocaOther={setLocaOther}
        showLoca={showLoca}
        setShowLoca={setShowLoca}
        // setLocaID={setLocaID}
      ></DeliveryAdrress>
      <RequestContent
        // reqContent={reqContent}
        setReqContent={setReqContent}
      ></RequestContent>
      <PointPayment point={userpoint} price={price}></PointPayment>
      <div className="p-2">
        <PayComplete
          price={price}
          reqContent={reqContent}
          productId={productId}
          locaValue={locaValue}
          location={location}
          userpoint={userpoint}
          detailLoca={detailLoca}
          locaOther={locaOther}
        ></PayComplete>
      </div>
    </div>
  );
};

export default Buy;

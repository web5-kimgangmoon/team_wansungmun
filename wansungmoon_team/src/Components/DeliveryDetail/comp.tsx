import DeliveryBtn from "../Delivery/DeliveryZip/DeliveryBtn";
import DeliveryTab from "../Delivery/DeliveryZip/DeliveryTab";
import DeliveryContent from "./Delivery/DeliveryDetail";
import DetailPic, { IProps as IDeatilPic } from "./Delivery/DetailPic";
import qwer from "./img/qwer.png";

interface IProps {
  // detailPic: IDeatilPic;
}

const DeliveryDetail = () => {
  return (
    <div>
      <DeliveryTab>배송 상세</DeliveryTab>
      <DetailPic titleImg={qwer}></DetailPic>
      <DeliveryContent></DeliveryContent>
      <DeliveryBtn></DeliveryBtn>
    </div>
  );
};

export default DeliveryDetail;

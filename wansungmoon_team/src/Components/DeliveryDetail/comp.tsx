import DeliveryBtn from "../Delivery/DeliveryZip/DeliveryBtn";
import DeliveryList from "../Delivery/DeliveryZip/DeliveryList";
import DeliveryTab from "../Delivery/DeliveryZip/DeliveryTab";
import DeliveryContent from "./Delivery/DeliveryDetail";
import DetailPic from "./Delivery/DetailPic";

interface IProps {
  children: string;
}

const DeliveryDetail = () => {
  return (
    <div>
      <DeliveryTab>배송 상세</DeliveryTab>
      <DetailPic></DetailPic>
      <DeliveryContent></DeliveryContent>
      <DeliveryBtn></DeliveryBtn>
    </div>
  );
};

export default DeliveryDetail;

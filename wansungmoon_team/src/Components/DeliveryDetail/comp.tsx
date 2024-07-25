import DeliveryBtn, { IProps as IDeliveryBtn } from "./Delivery/DeliveryBtn3";
import DeliveryTab from "../Delivery/DeliveryZip/DeliveryTab";
import DeliveryContent, {
  IProps as IDeliveryContent,
} from "./Delivery/DeliveryDetail";
import DetailPic, { IProps as IDeatilPic } from "./Delivery/DetailPic";

interface IProps {
  detailPic: IDeatilPic;
  deliveryContent: IDeliveryContent;
  deliveryBtn: IDeliveryBtn;
}

const DeliveryDetail = ({
  detailPic,
  deliveryContent,
  deliveryBtn,
}: IProps) => {
  return (
    <div>
      <DeliveryTab>배송 상세</DeliveryTab>
      <DetailPic titleImg={detailPic.titleImg}></DetailPic>
      <DeliveryContent {...deliveryContent}></DeliveryContent>
      <DeliveryBtn {...deliveryBtn}></DeliveryBtn>
    </div>
  );
};

export default DeliveryDetail;

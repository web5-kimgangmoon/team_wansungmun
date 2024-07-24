import DeliveryBtn, { IProps as IBtn } from "./DeliveryZip/DeliveryBtn2";
import DeliveryList, { ListTy } from "./DeliveryZip/DeliveryList";
import DeliveryTab from "./DeliveryZip/DeliveryTab";

interface IProps {
  btn: IBtn;
  list: ListTy;
}

const DeliveryListPage = ({ btn, list }: IProps) => {
  return (
    <div>
      <DeliveryTab>배송목록</DeliveryTab>
      <DeliveryList list={list}></DeliveryList>
      <DeliveryBtn {...btn}></DeliveryBtn>
    </div>
  );
};

export default DeliveryListPage;

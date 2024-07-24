import DeliveryBtn from "./DeliveryZip/DeliveryBtn";
import DeliveryList from "./DeliveryZip/DeliveryList";
import DeliveryTab from "./DeliveryZip/DeliveryTab";

interface IProps {
  children: string;
}

const DeliveryListPage = () => {
  return (
    <div>
      <DeliveryTab>배송목록</DeliveryTab>
      <DeliveryList></DeliveryList>
      <DeliveryBtn></DeliveryBtn>
    </div>
  );
};

export default DeliveryListPage;

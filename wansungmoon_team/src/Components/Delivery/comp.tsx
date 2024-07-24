import DeliveryBtn from "./DeliveryZip/DeliveryBtn";
import DeliveryList from "./DeliveryZip/DeliveryList";
import DeliveryTab from "./DeliveryZip/DeliveryTab";

interface IProps {}

const DeliveryListPage = () => {
  return (
    <div>
      <DeliveryTab></DeliveryTab>
      <DeliveryList></DeliveryList>
      <DeliveryBtn></DeliveryBtn>
    </div>
  );
};

export default DeliveryListPage;

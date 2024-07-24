import DeliveryContent from "./DeliveryContent";
import DeliveryIndex from "./DeliveryIndex";

interface IProps {}

const DeliveryList = () => {
  return (
    <div className="text-sm">
      <DeliveryIndex></DeliveryIndex>
      <DeliveryContent></DeliveryContent>
      <DeliveryContent></DeliveryContent>
      <DeliveryContent></DeliveryContent>
    </div>
  );
};

export default DeliveryList;

import DeliveryContent from "./DeliveryContent";
import DeliveryIndex from "./DeliveryIndex";
import { IItem } from "./DeliveryContent";

export type ListTy = IItem[];
export interface IProps {
  list: ListTy;
}

const DeliveryList = ({ list }: IProps) => {
  return (
    <div className="text-sm">
      <DeliveryIndex></DeliveryIndex>
      {list.map((item, idx) => (
        <DeliveryContent
          key={item.id}
          id={item.id}
          idx={idx + 1}
          name={item.name}
          phone={item.phone}
          address={item.address}
        ></DeliveryContent>
      ))}
    </div>
  );
};

export default DeliveryList;

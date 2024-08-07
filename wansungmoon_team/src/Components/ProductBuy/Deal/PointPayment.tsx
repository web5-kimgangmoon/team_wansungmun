import Payment from "../Payment/Payment";
import PointTab from "../Payment/PointTab";

interface IProps {
  point: number;
  price: number;
}

const PointPayment = ({ point, price }: IProps) => {
  return (
    <div className="border-b">
      <PointTab point={point}></PointTab>
      <Payment price={price}></Payment>
    </div>
  );
};

export default PointPayment;

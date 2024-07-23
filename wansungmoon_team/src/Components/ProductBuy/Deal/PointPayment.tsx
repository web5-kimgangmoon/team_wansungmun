import Payment from "../Payment/Payment";
import PointTab from "../Payment/PointTab";

interface IProps {}

const PointPayment = () => {
  return (
    <div className="border-b">
      <PointTab></PointTab>
      <Payment></Payment>
    </div>
  );
};

export default PointPayment;

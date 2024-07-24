import LongButton from "../../Public/Body/LongButton";

interface IProps {}

const DeliveryBtn = () => {
  return (
    <div>
      <div className="w-[90%] mx-[5%] mt-2">
        <LongButton textColor="white" bgColor="blue">
          배송중
        </LongButton>
      </div>
    </div>
  );
};

export default DeliveryBtn;

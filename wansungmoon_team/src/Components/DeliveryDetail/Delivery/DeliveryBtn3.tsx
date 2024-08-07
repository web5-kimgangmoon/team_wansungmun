import LongButton from "../../Public/Body/LongButton";

export interface IProps {
  onClick: () => void;
  deliveryStatus: number;
}

const DeliveryBtn = ({ deliveryStatus, onClick }: IProps) => {
  const LongButtonInfo: ["green" | "red" | "gray", "white" | "black", string] =
    deliveryStatus === 0
      ? ["gray", "black", "배송전"]
      : deliveryStatus === 1
      ? ["green", "white", "배송완료"]
      : ["red", "white", "완료취소"];
  return (
    <div>
      <div className="w-[90%] mx-[5%] mt-2">
        <LongButton
          bgColor={LongButtonInfo[0]}
          textColor={LongButtonInfo[1]}
          onClick={onClick}
        >
          {LongButtonInfo[2]}
        </LongButton>
      </div>
    </div>
  );
};

export default DeliveryBtn;

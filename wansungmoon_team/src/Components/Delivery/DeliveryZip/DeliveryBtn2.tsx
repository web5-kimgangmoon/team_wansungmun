import LongButton from "../../Public/Body/LongButton";

export interface IProps {
  onClick: () => void;
  isDeliverying: boolean;
}

const DeliveryBtn = ({ isDeliverying, onClick }: IProps) => {
  const LongButtonInfo: ["red" | "blue", "white", string] = isDeliverying
    ? ["red", "white", "배송중"]
    : ["blue", "white", "배송시작"];
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

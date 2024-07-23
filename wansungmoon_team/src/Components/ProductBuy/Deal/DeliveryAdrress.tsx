import LongButton from "../../Public/Body/LongButton";

interface IProps {}

const DeliveryAdrress = () => {
  return (
    <div>
      <div className="p-1 font-black">배송지</div>
      <div className="flex gap-3 p-2">
        <input type="text" className="bg-cusGray rounded-2xl pl-3 w-[80%]"></input>
        <div className="w-[15%]">
          <LongButton textColor="black" bgColor="gray">
            등록
          </LongButton>
        </div>
      </div>
      <div className="flex p-1">
        <div className="pl-1">
          <input type="checkbox" />
        </div>
        <div className="pl-3">안심번호 사용</div>
      </div>
    </div>
  );
};

export default DeliveryAdrress;

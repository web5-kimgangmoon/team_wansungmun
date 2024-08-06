import SmallButton from "../Public/Body/SmallButton/SmallButton";
import DealIng from "../Temp/DealIng";

// interface IProps {}

const OrderListContent = () => {
  return (
    <div>
      <div className="flex justify-between">
        <DealIng></DealIng>
        <div>❌</div>
      </div>
      <div className="flex m-3 border-b">
        <div className="w-[7.5rem] h-[7.5rem] border">사진</div>
        <div className="m-1">
          <div className="h-[2.5rem] items-center">
            중고자전거- 싸게파는중!!!
          </div>
          <div className="flex h-[2.5rem] items-center justify-between">
            <div className="">나는야작성자</div>
          </div>
          <div className="flex h-[2.5rem] items-center justify-between">
            <SmallButton textColor="white" bgColor="white">
              거래상세
            </SmallButton>
            <SmallButton textColor="white" bgColor="red">
              거래취소
            </SmallButton>
            <div>❤</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListContent;

export interface IProps {
  address: string;
  detailAddress: string;
  name: string;
  phone: string;
  request: string;
}

const DeliveryContent = ({
  address,
  detailAddress,
  name,
  phone,
  request,
}: IProps) => {
  return (
    <div className="border border-cusGray my-2 mx-1 text-sm rounded px-1">
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">주소</div>
        </div>
        <div className="flex-1">{address}</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">상세주소</div>
        </div>
        <div className="flex-1">{detailAddress}</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">수취인</div>
        </div>
        <div className="flex-1">{name}</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">전화번호</div>
        </div>
        <div className="flex-1">{phone}</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center flex items-center">
          <div className="bg-cusGray rounded-2xl">거래요청사항</div>
        </div>
        <div className="flex-1">{request}</div>
      </div>
    </div>
  );
};

export default DeliveryContent;

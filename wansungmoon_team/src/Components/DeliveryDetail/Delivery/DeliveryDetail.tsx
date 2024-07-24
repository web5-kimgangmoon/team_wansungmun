interface IProps {
  address: string;
  detailAddress: string;
  recipient: string;
  phone: string;
  request: string;
}

const DeliveryContent = () => {
  return (
    <div className="border border-cusGray my-2 mx-1 text-sm rounded px-1">
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">주소</div>
        </div>
        <div className="flex-1">서울시 강동구 올림픽로 776 암사역</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">상세주소</div>
        </div>
        <div className="flex-1">지하철 옆 텐트</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">수취인</div>
        </div>
        <div className="flex-1">김김김</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center">
          <div className="bg-cusGray rounded-2xl">전화번호</div>
        </div>
        <div className="flex-1">010-0323-3242</div>
      </div>
      <div className="flex py-2 gap-2">
        <div className="w-[23%] text-center flex items-center">
          <div className="bg-cusGray rounded-2xl">거래요청사항</div>
        </div>
        <div className="flex-1">
          나중에 타고 돌아다닐 생각입니다. 아무데나 세워두진 마시고 지정된 곳에
          세워둬주세요, 우선 지하철 옆의 자전거 정거장에의 왼쪽 마지막의 두번째
          칸에 세워주세요. 거기에 자물쇠가 하나 걸려있는데요, 자물쇠 비밀번호는
          9032입니다. 만약에 그 자리를 다른사람이 먼저 차지하고 있으면 마지막
          자리에 채워주시고 그 자리도 찼다면 지하철 입구의 맞은 편에 위치한 상가
          건물의 난간에 자전거를 걸어주세요. 꼭 지켜주셔야합니다! 꼭이요!
        </div>
      </div>
    </div>
  );
};

export default DeliveryContent;

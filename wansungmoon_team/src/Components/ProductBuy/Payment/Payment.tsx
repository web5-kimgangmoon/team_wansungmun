interface IProps {}

const Payment = () => {
  return (
    <div className="p-2">
      <div className="flex font-bold justify-between">결제금액</div>
      <div className="p-2">
        <div className="flex font-bold justify-between pb-1">
          <div>상품금액</div>
          <div>150,000 원</div>
        </div>
        <div className="flex font-bold justify-between pb-1">
          <div>배송비</div>
          <div>무료</div>
        </div>
        <div className="flex font-bold justify-between pb-1">
          <div>안전결제 수수료</div>
          <div>+ 3000 원</div>
        </div>
        <div className="flex font-bold justify-between pb-1">
          <div>Moon 포인트 사용</div>
          <div>0 원</div>
        </div>
        <div className="flex font-bold justify-between pb-1">
          <div>총 결제금액</div>
          <div>153,000 원</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

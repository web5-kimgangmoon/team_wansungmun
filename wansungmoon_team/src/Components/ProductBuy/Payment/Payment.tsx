interface IProps {
  price: number;
}

const Payment = ({ price }: IProps) => {
  return (
    <div className="p-2">
      <div className="flex font-bold justify-between">결제금액</div>
      <div className="p-2">
        <div className="flex font-bold justify-between pb-1">
          <div>상품금액</div>
          <div>{price} 원</div>
        </div>
        <div className="flex font-bold justify-between pb-1">
          <div>배송비</div>
          <div>3000 원</div>
        </div>
        <div className="flex font-bold justify-between pb-2"></div>

        <div className="flex font-bold justify-between pb-1">
          <div>총 결제금액</div>
          <div>{price + 3000} 원</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import qwer from "../../ProductPage/img/qwer.png";

interface IProps {}

const ProductInfo = () => {
  return (
    <div className="border-b">
      <div className="flex p-3">
        <div className="w-[30%]">
          <img src={qwer} alt="" />
        </div>
        <div className="pl-2">
          <div>
            <div className="text-xl font-bold">QWER 앨범 팔아요</div>
          </div>
          <div className="pt-5">
            <div className="font-bold">150,000 원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

interface IProps {
  title: string;
  price: number;
  src: string;
}

const ProductInfo = ({ src, title, price }: IProps) => {
  return (
    <div className="border-b">
      <div className="flex p-3">
        <div className="w-[30%]">
          <img src={src} alt="" />
        </div>
        <div className="pl-2">
          <div>
            <div className="text-xl font-bold">{title}</div>
          </div>
          <div className="pt-5">
            <div className="font-bold">{price} 원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

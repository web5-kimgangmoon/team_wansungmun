import Profile from "./img/gom.png";
import Siren from "./img/siren1.png";

interface IProps {
  writer: string;
  title: string;
  location: string;
  price: number;
  score: number;
  reviewCount: number;
}

const ProductPageTitleLine = ({
  title,
  writer,
  location,
  price,
  score,
  reviewCount,
}: IProps) => {
  const priceArr = price.toString().split("");
  let priceStr = priceArr
    .map((item, index) =>
      (priceArr.length - index) % 3 === 0 ? "," + item : item
    )
    .join("");
  if (priceStr.charAt(0) === ",") priceStr = priceStr.replace(",", "");
  return (
    <div className="flex my-3 ml-2 border-b">
      <div className="w-[4rem]">
        <div className="flex justify-center">
          <img src={Profile} alt="" className="rounded-full border h-[3rem]" />
        </div>
        <div className="text-[0.62rem] font-bold mt-2 text-center">
          {writer}
        </div>
      </div>
      <div className="flex-1 leading-1 pl-2">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-sm">{location}</div>
        <div className="font-bold">{priceStr}원</div>
      </div>
      <div className="text-sm">
        <div className="mb-2">{`⭐ ${score}(${reviewCount})`}</div>
        <button className="mb-2">판매자후기</button>
        <div className="flex mb-2">
          <img src={Siren} alt="" className="w-5" />
          <button>신고하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageTitleLine;

import Profile from "./img/gom.png";
import Siren from "./img/siren.png";

interface IProps {}

const ProductPageTitleLine = () => {
  return (
    <div className="flex my-3 ml-3 border-b">
      <div className="w-[4rem]">
        <img src={Profile} alt="" className="rounded-full border h-[3.5rem]" />
        <div className="text-[0.62rem] font-bold mt-2">나는야 작성자</div>
      </div>
      <div className="flex-1 leading-[1.7rem] pl-2">
        <div className="font-bold text-xl">QWER 앨범 팔아요</div>
        <div className="text-sm">[천호동]</div>
        <div className="font-bold">150,000원</div>
      </div>
      <div className="text-sm">
        <div className="mb-2">⭐ 4.4(15)</div>
        <div className="mb-2">판매자후기</div>
        <div className="flex mb-2">
          <img src={Siren} alt="" className="w-5" />
          <div>신고하기</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageTitleLine;

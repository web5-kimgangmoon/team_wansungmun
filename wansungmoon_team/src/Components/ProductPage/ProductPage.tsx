import LongButton from "../Public/Body/LongButton";
import ProductPageMenu from "./ProductPageMenu";
import ProductPageContents from "./ProductPageContents";
import ProductPageTitleLine from "./ProductPageTitleLine";
import ProductPageImg from "./ProductPageImg";

interface IProps {}

const ProductPage = () => {
  return (
    <div>
      <ProductPageMenu></ProductPageMenu>
      <ProductPageImg></ProductPageImg>
      <ProductPageTitleLine></ProductPageTitleLine>
      <ProductPageContents></ProductPageContents>
      <div className="flex justify-center gap-3">
        <div className="w-[20%]">
          <LongButton textColor="white" bgColor="red">
            채팅하기
          </LongButton>
        </div>
        <div className="w-[65%]">
          <LongButton textColor="white" bgColor="red">
            구매하기
          </LongButton>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

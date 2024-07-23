import LongButton from "../Public/Body/LongButton";
import ProductPageContents from "./ProductPageContents";
import ProductPageImg from "./ProductPageImg";
import ProductPageMenu from "./ProductPageMenu";
import ProductPageTitleLine from "./ProductPageTitleLine";

export interface IProps {
  category: string;
  contents: string;
  title: string;
  writer: string;
  location: string;
  price: number;
  score: number;
  reviewCount: number;
  src: string;
}

const Content = ({
  category,
  contents,
  title,
  writer,
  location,
  price,
  score,
  reviewCount,
  src,
}: IProps) => {
  return (
    <div>
      <ProductPageImg src={src}>
        <ProductPageMenu />
      </ProductPageImg>
      <ProductPageTitleLine
        title={title}
        writer={writer}
        location={location}
        price={price}
        score={score}
        reviewCount={reviewCount}
      />
      <ProductPageContents
        category={category}
        contents={contents}
      ></ProductPageContents>
      <div className="flex justify-center gap-3">
        <div className="w-[20%]">
          <LongButton textColor="white" bgColor="red">
            채팅하기
          </LongButton>
        </div>
        <div className="w-[65%]">
          <LongButton textColor="white" bgColor="realRed">
            구매하기
          </LongButton>
        </div>
      </div>
    </div>
  );
};

export default Content;

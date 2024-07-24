import axios from "axios";
import LongButton from "../Public/Body/LongButton";
import ProductPageContents from "./ProductPageContents";
import ProductPageImg from "./ProductPageImg";
import ProductPageMenu from "./ProductPageMenu";
import ProductPageTitleLine from "./ProductPageTitleLine";
import { useNavigate } from "react-router-dom";

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
  sellerId: number;
  productId: number;
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
  productId,
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
          <LongButton textColor="red" bgColor="chatRed">
            채팅하기
          </LongButton>
        </div>
        <div className="w-[65%]">
          <LongButton
            textColor="white"
            bgColor="realRed"
            onClick={(e) => onSubmit()}
          >
            구매하기
          </LongButton>
        </div>
      </div>
    </div>
  );
};

export default Content;

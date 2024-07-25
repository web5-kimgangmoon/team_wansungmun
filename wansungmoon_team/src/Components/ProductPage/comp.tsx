import axios from "axios";
import LongButton from "../Public/Body/LongButton";
import ProductPageContents from "./ProductPageContents";
import ProductPageImg from "./ProductPageImg";
import ProductPageMenu from "./ProductPageMenu";
import ProductPageTitleLine from "./ProductPageTitleLine";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { write } from "fs";

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
<<<<<<< HEAD
=======
  const navigate = useNavigate();
  const Info = useLocation();

  const onSubmit = async () => {
    const Sell = await axios.post("/api/sell", {
      id: productId,
      sellerId: sellerId,
    });
    if (Sell.status == 302) {
      alert("자신의 상품은 구매할 수 없습니다!");
    } else {
      navigate("/buy", { state: { sellerId, contents, title, src, price } });
    }
  };

>>>>>>> c3e24a0 (feat: sell_process)
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

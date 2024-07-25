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
  status: number;
}

const Content = ({
  sellerId,
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
  status,
}: IProps) => {
  const navigate = useNavigate();
  const Info = useLocation();

  const onSubmit = async () => {
    // console.log("웨안되");
    const Sell = await axios.get("/api/sell", { withCredentials: true });
    console.log(Sell);
    navigate("/productbuy", {
      state: { sellerId, contents, title, src, price },
    });
  };

  let version;
  // 211 == 로그인 되어있고, 자신의 상품이 아님
  if (status == 211) {
    version = (
      <LongButton
        textColor="white"
        bgColor="realRed"
        onClick={async (e) => {
          await onSubmit();
        }}
      >
        구매하기
      </LongButton>
    );
    // 210 == 자신의 상품
  } else if (status == 210) {
    version = (
      <LongButton textColor="white" bgColor="realRed">
        수정하기
      </LongButton>
    );
    // 209 == not login
  } else if (status == 209) {
    version = version = (
      <LongButton
        textColor="white"
        bgColor="realRed"
        onClick={(e) => navigate("/login")}
      >
        구매하기
      </LongButton>
    );
  }

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
        <div className="w-[65%]">{version}</div>
      </div>
    </div>
  );
};

export default Content;

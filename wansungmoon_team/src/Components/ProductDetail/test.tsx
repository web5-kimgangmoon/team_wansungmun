import { MouseEvent } from "react";
import ProductDetail from ".";
import bycle from "../../imgs/Kakao_logo.jpg";
import ReviewDetail from "./ReviewDetail";

interface ITest {
  src: string;
  title: string;
  price: number;
  category: string;
  content: string;
  isCanReview?: boolean;
  isReviewed?: boolean;
  isAbleDeliveryLocationCheck?: boolean;
  isPurchaser?: boolean;
  previousPath?: string;
  reviewPath?: string;
  onClickReviewWrite?: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickDeliveryCheck?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Test = () => {
  const test: ITest = {
    src: bycle,
    title: "QWER 앨범 팔아요sssssssssssssssssssssssssssssssssssssssssssss",
    price: 150000000,
    category: "취미/게임/음반",
    content: `새상품 판매 합니다
멤버 전원 친필 싸인 o
가격 제시 받습니다
자세한 내용 문의 주세요`,
    isCanReview: false,
    isReviewed: true,
    isPurchaser: true,
    isAbleDeliveryLocationCheck: true,
    previousPath: "/",
  };
  return (
    <div>
      {/* <ProductDetail
        src={test.src}
        title={test.title}
        price={test.price}
        category={test.category}
        content={test.content}
        isCanReview={test.isCanReview}
        isReviewed={test.isReviewed}
        isAbleDeliveryLocationCheck={test.isAbleDeliveryLocationCheck}
        previousPath={test.previousPath}
        isPurchaser={test.isPurchaser}
      /> */}
      <ReviewDetail
        src={test.src}
        title={test.title}
        price={test.price}
        content={test.content}
        previousPath={test.previousPath}
        productListPath={test.previousPath}
        score={4}
        date={new Date(Date.now() - 30000000)}
        writer="나는야작성자"
        pictures={[test.src, test.src, test.src, test.src, test.src]}
      />
    </div>
  );
};

export default Test;

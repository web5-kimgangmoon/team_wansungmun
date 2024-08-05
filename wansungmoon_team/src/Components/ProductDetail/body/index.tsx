import { MouseEvent } from "react";
import Comp from "./comp";
import { useNavigate, useParams } from "react-router-dom";
import useOrderListDetail from "../../../hooks/orderList/useOrderLIstDetail";
import valueCheck from "../../../lib/valueCheck";

interface IComp {
  src: string;
  title: string;
  price: number;
  category: string;
  content: string;
  isCanReview?: boolean;
  isReviewed?: boolean;
  isAbleDeliveryLocationCheck?: boolean;
  isPurchaser?: boolean;
  clickPreviousPath?: () => void;
  reviewPath?: string;
  onClickReviewWrite?: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickDeliveryCheck?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data, isPending, isFetching } = useOrderListDetail(
    valueCheck(productId)
  );
  if (isPending || isFetching) return <div className="container">로딩중</div>;
  if (!data || !data.data)
    return <div className="container">데이터가 없거나 구매자가 아닙니다</div>;
  const info: IComp = {
    src: data.data.product.titleImg,
    title: data.data.product.productName,
    price: data.data.product.price,
    category: data.data.product.category,
    content: data.data.product.content,
    isCanReview: false,
    isReviewed: false,
    isPurchaser: true,
    isAbleDeliveryLocationCheck:
      data.data.product.tradeStatus == 2 ? true : false,
    clickPreviousPath: () => navigate(-1),
    onClickDeliveryCheck: () => {
      navigate(`/locationCheck/${data.data.product.id}`);
    },
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
      <Comp {...info} />
    </div>
  );
};

export default ProductDetail;
